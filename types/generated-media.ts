/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Generated media.
 * @public
 */
export interface GeneratedMedia {
  video?: GeneratedVideo;
}

/**
 * Generated video.
 * @public
 */
export interface GeneratedVideo {
  /**
   * Video bytes.
   */
  video?: string;
  /**
   * Specifies the dynamic retrieval configuration for the given source.
   */
  uri?: string;
}

export interface GeneratedImage {
  /**
   * Image bytes.
   */
  imageBytes?: string;
  /**
   * Generation parameters.
   */
  generationParameters?: { [key: string]: any }; 
}
