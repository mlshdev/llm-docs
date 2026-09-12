> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage](https://developer.apple.com/documentation/naturallanguage)

# Natural Language

**Interface languages:** Swift, Objective-C

**Framework:** Natural Language  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Analyze natural language text and deduce its language-specific metadata.

<a id="overview"></a>

## Overview

The Natural Language framework provides a variety of natural language processing (NLP) functionality with support for many different languages and scripts. Use this framework to segment natural language text into paragraphs, sentences, or words, and tag information about those segments, such as part of speech, lexical class, lemma, script, and language.

![Diagram showing the types of analysis that the Natural Language framework can perform.](https://developer.apple.com/images/com.apple.naturallanguage/media-3597579@2x.png)

Use this framework to perform tasks like:

- *Language identification*, automatically detecting the language of a piece of text.
- *Tokenization*, breaking up a piece of text into linguistic units or tokens.
- *Parts-of-speech tagging*, marking up individual words with their part of speech.
- *Lemmatization*, deducing a word’s stem based on its morphological analysis.
- *Named entity recognition*, identifying tokens as names of people, places, or organizations.

You can also use this framework with Create ML to train and deploy custom natural language models. For more information, see [Creating a text classifier model](createml/creating-a-text-classifier-model.md) and doc:creating-a-word-tagger-model.

## Topics

### Tokenization

- [Tokenizing natural language text](naturallanguage/tokenizing-natural-language-text.md): Enumerate the words in a string.
- [NLTokenizer](naturallanguage/nltokenizer.md): A tokenizer that segments natural language text into semantic units.

### Language identification

- [Identifying the language in text](naturallanguage/identifying-the-language-in-text.md): Detect the language in a piece of text by using a language recognizer.
- [NLLanguageRecognizer](naturallanguage/nllanguagerecognizer.md): The language of a body of text.
- [NLLanguage](naturallanguage/nllanguage.md): The languages that the Natural Language framework supports.

### Linguistic tags

- [Identifying parts of speech](naturallanguage/identifying-parts-of-speech.md): Classify nouns, verbs, adjectives, and other parts of speech in a string.
- [Identifying people, places, and organizations](naturallanguage/identifying-people-places-and-organizations.md): Use a linguistic tagger to perform named entity recognition on a string.
- [NLTagger](naturallanguage/nltagger.md): A tagger that analyzes natural language text.

### Text embedding

- [Finding similarities between pieces of text](naturallanguage/finding-similarities-between-pieces-of-text.md): Calculate the semantic distance between words or sentences.
- [NLEmbedding](naturallanguage/nlembedding.md): A map of strings to vectors, which locates neighboring, similar strings.

### Contextual embedding

- [NLContextualEmbedding](naturallanguage/nlcontextualembedding.md): A model that computes sequences of embedding vectors for natural language utterances.
- [NLContextualEmbeddingKey](naturallanguage/nlcontextualembeddingkey.md): This class defines properties that you can filter or search for contextual embeddings.
- [NLScript](naturallanguage/nlscript.md): The writing scripts that the Natural Language framework supports.

### Natural language models

- [Creating a text classifier model](createml/creating-a-text-classifier-model.md): Train a machine learning model to classify natural language text.
- [Creating a word tagger model](createml/creating-a-word-tagger-model.md): Train a machine learning model to tag individual words in natural language text.
- [NLModel](naturallanguage/nlmodel.md): A custom model trained to classify or tag natural language text.
