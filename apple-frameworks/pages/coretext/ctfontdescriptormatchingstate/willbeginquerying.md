> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptormatchingstate/willbeginquerying](https://developer.apple.com/documentation/coretext/ctfontdescriptormatchingstate/willbeginquerying)

# CTFontDescriptorMatchingState.willBeginQuerying (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A state that indicates communication with the server is about to begin.

## Declaration

```swift
case willBeginQuerying
```

<a id="Discussion"></a>

## Discussion

This state is skipped if unnecessary.

## See Also

### Constants

- [CTFontDescriptorMatchingState.didBegin](didbegin.md): A state that indicates matching is about to begin.
- [CTFontDescriptorMatchingState.didFinish](didfinish.md): A state that indicates matching is done.
- [CTFontDescriptorMatchingState.stalled](stalled.md): A state that indicates that matching is stalled, such as while waiting for a server response.
- [CTFontDescriptorMatchingState.willBeginDownloading](willbegindownloading.md): A state that indicates downloading is about to begin.
- [CTFontDescriptorMatchingState.downloading](downloading.md): A state that indicates downloading is in progress.
- [CTFontDescriptorMatchingState.didFinishDownloading](didfinishdownloading.md): A state that indicates downloading is done.
- [CTFontDescriptorMatchingState.didMatch](didmatch.md): A state that indicates the font descriptor match is successful.
- [CTFontDescriptorMatchingState.didFailWithError](didfailwitherror.md): A state that indicates an error.

# kCTFontDescriptorMatchingWillBeginQuerying (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A state that indicates communication with the server is about to begin.

## Declaration

```objectivec
kCTFontDescriptorMatchingWillBeginQuerying
```

<a id="Discussion"></a>

## Discussion

This state is skipped if unnecessary.

## See Also

### Constants

- [kCTFontDescriptorMatchingDidBegin](didbegin.md): A state that indicates matching is about to begin.
- [kCTFontDescriptorMatchingDidFinish](didfinish.md): A state that indicates matching is done.
- [kCTFontDescriptorMatchingStalled](stalled.md): A state that indicates that matching is stalled, such as while waiting for a server response.
- [kCTFontDescriptorMatchingWillBeginDownloading](willbegindownloading.md): A state that indicates downloading is about to begin.
- [kCTFontDescriptorMatchingDownloading](downloading.md): A state that indicates downloading is in progress.
- [kCTFontDescriptorMatchingDidFinishDownloading](didfinishdownloading.md): A state that indicates downloading is done.
- [kCTFontDescriptorMatchingDidMatch](didmatch.md): A state that indicates the font descriptor match is successful.
- [kCTFontDescriptorMatchingDidFailWithError](didfailwitherror.md): A state that indicates an error.
