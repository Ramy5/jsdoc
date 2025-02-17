/*
  Copyright 2020 the JSDoc Authors.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
const tag = require('../../index');

describe('@jsdoc/tag', () => {
  it('is an object', () => {
    expect(tag).toBeObject();
  });

  describe('definitions', () => {
    it('is lib/definitions', () => {
      const definitions = require('../../lib/definitions');

      expect(tag.definitions).toBe(definitions);
    });
  });

  describe('Dictionary', () => {
    it('is lib/dictionary.Dictionary', () => {
      const { Dictionary } = require('../../lib/dictionary');

      expect(tag.Dictionary).toBe(Dictionary);
    });
  });

  describe('inline', () => {
    it('is lib/inline', () => {
      const inline = require('../../lib/inline');

      expect(tag.inline).toBe(inline);
    });
  });

  describe('Tag', () => {
    it('is lib/tag.Tag', () => {
      const { Tag } = require('../../lib/tag');

      expect(tag.Tag).toBe(Tag);
    });
  });

  describe('type', () => {
    it('is lib/type', () => {
      const type = require('../../lib/type');

      expect(tag.type).toBe(type);
    });
  });

  describe('validate', () => {
    it('is lib/validator.validate', () => {
      const { validate } = require('../../lib/validator');

      expect(tag.validate).toBe(validate);
    });
  });
});
