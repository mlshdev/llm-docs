> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/write(_:language:revision:to:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/write(_:language:revision:to:))

# write(\_:language:revision:to:)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Exports the word embedding contained within a Core ML model file at the given URL.

## Declaration

```swift
@nonobjc class func write(_ dictionary: [String : [Double]], language: NLLanguage?, revision: Int, to url: URL) throws
```

## Parameters

- `dictionary`: A dictionary of terms, and their vectors, which are represented by an array of doubles.
- `language`: The language of the text in the word embedding.
- `revision`: The revision of the word embedding.
- `url`: The location in the file system to write the file to.
