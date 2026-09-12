> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresult](https://developer.apple.com/documentation/latentsemanticmapping/lsmresult)

# LSMResult (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

A result of a lookup in a map.

## Declaration

```swift
class LSMResult
```

<a id="overview"></a>

## Overview

An [LSMResult](lsmresult.md) is an immutable, opaque Core Foundation type that represents the result of a lookup.

## Topics

### Creating a Result

- [LSMResultCreate(\_:\_:\_:\_:\_:)](lsmresultcreate%28__________%29.md): Returns the categories or words that best match when a text is mapped into a map, in decreasing order of likelihood.
- [Result Flags](result-flags.md): Options for creating a result.

### Querying Result Information

- [LSMResultGetCount(\_:)](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetCategory(\_:\_:)](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.
- [LSMResultGetScore(\_:\_:)](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.

### Getting a Result

- [LSMResultCopyToken(\_:\_:)](lsmresultcopytoken%28____%29.md): Returns the token for the n-th best (zero-based) result.
- [LSMResultCopyTokenCluster(\_:\_:)](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord(\_:\_:)](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.
- [LSMResultCopyWordCluster(\_:\_:)](lsmresultcopywordcluster%28____%29.md): Returns the cluster of words for the n-th best (zero-based) result.

### Getting the Type Identifier

- [LSMResultGetTypeID()](lsmresultgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping results.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Text Classification

- [LSMMap](lsmmap.md): A map between a set of categories and related text.
- [LSMText](lsmtext.md): An input text.

# LSMResultRef (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A result of a lookup in a map.

## Declaration

```objectivec
typedef struct __LSMResult * LSMResultRef;
```

<a id="overview"></a>

## Overview

An [LSMResultRef](lsmresult.md) is an immutable, opaque Core Foundation type that represents the result of a lookup.

## Topics

### Creating a Result

- [LSMResultCreate](lsmresultcreate%28__________%29.md): Returns the categories or words that best match when a text is mapped into a map, in decreasing order of likelihood.
- [Result Flags](result-flags.md): Options for creating a result.

### Querying Result Information

- [LSMResultGetCount](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetCategory](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.
- [LSMResultGetScore](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.

### Getting a Result

- [LSMResultCopyToken](lsmresultcopytoken%28____%29.md): Returns the token for the n-th best (zero-based) result.
- [LSMResultCopyTokenCluster](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.
- [LSMResultCopyWordCluster](lsmresultcopywordcluster%28____%29.md): Returns the cluster of words for the n-th best (zero-based) result.

### Getting the Type Identifier

- [LSMResultGetTypeID](lsmresultgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping results.

## See Also

### Text Classification

- [LSMMapRef](lsmmap.md): A map between a set of categories and related text.
- [LSMTextRef](lsmtext.md): An input text.
