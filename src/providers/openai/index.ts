import {
  handlePrompt,
  handleRapidPrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
  const provider: Provider = {
    id: 'provider-openai',
    icon: 'i-simple-icons-openai', // @unocss-include
    name: 'OpenAI',
    globalSettings: [
      {
        key: 'apiKey',
        name: 'API Key',
        type: 'api-key',
      },
      {
        key: 'baseUrl',
        name: 'Base URL',
        description: 'Custom base url for OpenAI API.',
        type: 'input',
        default: 'https://api.openai.com',
      },
      {
        key: 'model',
        name: 'OpenAI model',
        description: 'Custom gpt model for OpenAI API.',
        type: 'select',
        options: [
          { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
          { value: 'chatgpt-4o-latest', label: 'ChatGPT 4o' },
          { value: 'gpt-4o', label: 'GPT 4o' },
          { value: 'gpt-4o-2024-05-13', label: 'GPT 4o 0513' },
          { value: 'gpt-4o-2024-08-06', label: 'GPT 4o 0806' },
          { value: 'gpt-4o-mini-2024-07-18', label: 'GPT 4o Mini' },
          { value: 'claude-3-5-sonnet-20240620', label: 'Claude 3.5 Sonnet' },
          { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku' },
          { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' },
          { value: 'gemma-7b-it', label: 'Gemma 7B' },
          { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' },
          { value: 'gemini-1.5-pro-latest', label: 'Gemini 1.5 Pro' },
          { value: 'gemini-1.5-pro-exp-0801', label: 'Gemini 1.5 Pro Exp 0801' },
          { value: 'abab6-chat', label: '海螺abab6' },
          { value: 'Doubao-pro-32k', label: '字节豆包Pro' },
          { value: 'llama-3.1-405b', label: 'Llama 3.1 405B' },
          { value: 'llama-3.1-70b', label: 'Llama 3.1 70B' },
          { value: 'qwen-max', label: 'Qwen Max' },
          { value: 'step-1v-32k', label: 'Step 1v' },
          { value: 'yi-large-turbo', label: 'Yi Large Turbo' },
        ],
        default: 'claude-3-5-sonnet-20240620',
      },
      {
        key: 'maxTokens',
        name: 'Max Tokens',
        description: 'The maximum number of tokens to generate in the completion.',
        type: 'slider',
        min: 0,
        max: 32768,
        default: 4096,
        step: 1,
      },
      {
        key: 'messageHistorySize',
        name: 'Max History Message Size',
        description: 'The number of retained historical messages will be truncated if the length of the message exceeds the MaxToken parameter.',
        type: 'slider',
        min: 1,
        max: 24,
        default: 5,
        step: 1,
      },
      {
        key: 'temperature',
        name: 'Temperature',
        type: 'slider',
        description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
        min: 0,
        max: 2,
        default: 0.7,
        step: 0.01,
      },
      {
        key: 'top_p',
        name: 'Top P',
        description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        type: 'slider',
        min: 0,
        max: 1,
        default: 1,
        step: 0.01,
      },
    ],
    bots: [
      {
        id: 'chat_continuous',
        type: 'chat_continuous',
        name: 'Continuous Chat',
        settings: [],
      },
      {
        id: 'chat_single',
        type: 'chat_single',
        name: 'Single Chat',
        settings: [],
      },
      {
        id: 'image_generation',
        type: 'image_generation',
        name: 'DALL·E',
        settings: [],
      },
    ],
    handlePrompt,
    handleRapidPrompt,
  }
  return provider
}

export default providerOpenAI
