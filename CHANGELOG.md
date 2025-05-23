# @google/generative-ai

## 0.24.1

### Patch Changes

- 2a82804: Update package description to include deprecation notice.

## 0.24.0

### Minor Changes

- 13466b3: added support for buffers in uploadFile
- 64e5af7: BREAKING CHANGE: Enforce format safety when using string schemas

## 0.23.0

### Minor Changes

- da7ed0e: Introduce a new error type to represent AbortError from SDK

### Patch Changes

- 16737d3: Fixes issue #218 by ensuring system instructions are formatted always, not just when TTL is specified
- 9e95663: fix: Exclude content with empty parts from chat history
- be83756: Added custom header support to the Server package, matching functionality on the client package
- 33c3c24: add HARM_CATEGORY_CIVIC_INTEGRITY

## 0.22.0

### Minor Changes

- b546cba: Breaking change: Fix typo of groundingChunks
- 85621eb: Breaking change: Fix typo of 'groundingSupport' -> 'groundingSupports'
- 3004d3b: The schema types are now more specific, using a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) based on the 'type' field to more accurately define which fields are allowed.

### Patch Changes

- 864afb7: Swapped the package manager to npm, in order to take advantage of npm audit fix
- 070bcdc: Fix undefined candidate index.
- 6a99ed8: Make sure chat api do not send empty text request after encounter any server error that returns empty response. This fixes issue #124 and issue #286.
- 25d3a92: update FinishReason enum
- d87cf1d: Fix flaky integration test with tools

## 0.21.0

### Minor Changes

- 8543716: Add search grounding feature to SDK.

## 0.20.0

### Minor Changes

- dda0b5c: Add `frequencyPenalty`, `presencePenalty`, `responseLogprobs`, and `logProbs` parameters support for `generationConfig`. Added `avgLogprobs` and `logprobsResult` to `GenerateContentResponse`. Updated test cases.

## 0.19.0

### Minor Changes

- 00dc7a1: Use lowercase SchemaType enum values to match json-schema.

## 0.18.0

### Minor Changes

- fc008a1: Add ability to set modelParams (generationConfig, safetySettings) on getGenerativeModelFromCachedContent().

## 0.17.2

### Patch Changes

- d8f6b4f: Fix language marker in text helper for executable code results.

## 0.17.1

### Patch Changes

- fdfb5bd: Fix reference to `requestOptions` in `startChat`.

## 0.17.0

### Minor Changes

- 3b5daae: Fix `Schema` type to reference itself and not a derived type in its `items` array and `properties` map.

## 0.16.1

This is a cherry-picked patch to fix an bug for users pinned to versions 0.16.x.

### Patch Changes

- fdfb5bd: Fix reference to `requestOptions` in `startChat`.

## 0.16.0

### Minor Changes

- d2d42ca: Adds `SingleRequestOptions` with `AbortSignal` support to most of the asynchronous methods of `GenerativeModel`, `GoogleAIFileManager` and `ChatSession`.

## 0.15.0

### Minor Changes

- 05b8631: Add FinishReason.LANGUAGE enum value.

### Patch Changes

- e87d5b0: Fix countTokens to include any params set on the model instance.

## 0.14.1

### Patch Changes

- 0c23bb3: Add `CodeExecutionTool` to `Tool` type.

## 0.14.0

### Minor Changes

- fb1c0f2: Add a `cachedContentTokenCount` field to the `UsageMetadata` interface returned by `generateContent` responses.
- 06216be: Add code execution feature.

## 0.13.0

### Minor Changes

- 83ec4ac: Expand the model's `countTokens` method to alternatively accept a `GenerateContentRequest`.
- 5df61d1: Added `GoogleAICacheManager` utility to allow caching large content to be used in inference. This class is exported from the `@google/generative-ai/server` subpath. Breaking change: The `GoogleAIFileManager` class has been moved to be exported from this subpath as well instead of the `/files` subpath.

### Patch Changes

- 1440a05: Removed the `model` field from the internally formatted payload of `countToken` requests as it was unnecessary.
- 03eb57b: Fix missing usageMetadata in streamed aggregated response (#174)

## 0.12.0

### Minor Changes

- 85ff2c4: Added `responseSchema` to `GenerationConfig` to allow user to provide a JSON schema when `responseMimeType` is set to JSON.

## 0.11.5

### Patch Changes

- 42ba6ca: Fix paths to @google/generative-ai/files.

## 0.11.4

### Patch Changes

- ee02ff0: Add additional properties `videoMetadata` and `error` to `FileMetadataResponse` type.

## 0.11.3

### Patch Changes

- c7c0b50: Fixed `FileState` enum values to be strings.

## 0.11.2

### Patch Changes

- cefa8f2: Lifted a restriction in chat sessions that required a specific order of content roles.

## 0.11.1

### Patch Changes

- 819501f: Fix a bug that caused file uploads to be named "undefined" if no file name is provided.

## 0.11.0

### Minor Changes

- 58ab777: Added responseMimeType to GenerationConfig to allow for JSON formatted responses.

### Patch Changes

- c39015c: Fixed a bug where `text()` did not handle multiple `TextPart`s in a single candidate. Added `state` field to `FileMetadataResponse`.

## 0.10.0

### Minor Changes

- 657799a: Added UsageMetadata to GenerateContentResponses.
- 4562366: Add a request option for custom headers

## 0.9.0

### Minor Changes

- ca62400: Allow text-only systemInstruction as well as Part and Content.
- 111e970: Export error classes and add more properties to fetch errors.

## 0.8.0

### Minor Changes

- a89d427: Add GoogleAIFileManager for file uploads.

## 0.7.1

### Patch Changes

- 6ef8cee: Fixed bugs where `RequestOptions`, `generationConfig`, and `safetySettings` were not passed from the model down to some methods.

## 0.7.0

### Minor Changes

- 79b7651: Set default API version to "v1beta" to match Go and Python.

## 0.6.0

### Minor Changes

- 2a1f97c: Add `systemInstruction` feature and forced function calling feature (using `toolConfig`).

### Patch Changes

- 0931d2c: Refactor makeRequest to make fetch mockable.

## 0.5.0

### Minor Changes

- 658a0da: Add `apiClient` configuration option to `RequestOptions`.

## 0.4.0

### Minor Changes

- 790a943: Deprecate functionCall() and add functionCalls().
- e636823: Loosen role field typing on Content.
- 7a45f01: Add option in RequestOptions to change baseUrl.

### Patch Changes

- 3f95168: Fix requestOptions not being passed through countTokens, embedContent, and batchEmbedContents

## 0.3.1

### Patch Changes

- ccd9951: validateChatHistory is now checking that 'parts' property is an array

## 0.3.0

### Minor Changes

- 932e1be: Add `apiVersion` property to `RequestOptions` to allow user to choose API endpoint version.
- 9887465: Added support for function calling

## 0.2.1

### Patch Changes

- 2b0c955: Handle different model prefixes (such as tunedModels/).

## 0.2.0

### Minor Changes

- c64fca1: add request timeout configuration

## 0.1.3

### Patch Changes

- 54839f2: Send API key in header instead of query param.
- 6a4c9c2: Fixed stream hanging

## 0.1.2

### Patch Changes

- 73c2ff9: Fixed UTF-8 handling and chunking for stream output
- fb52d34: Obscure API key in error messages
- 5b5fc7d: Catch unhandled rejections in `sendMessageStream`.

## 0.1.1

### Patch Changes

- Update README to released version and bump to publish new README to npm.
