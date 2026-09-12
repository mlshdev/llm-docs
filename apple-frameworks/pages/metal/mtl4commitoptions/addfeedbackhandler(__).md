> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commitoptions/addfeedbackhandler(_:)](https://developer.apple.com/documentation/metal/mtl4commitoptions/addfeedbackhandler(_:))

# addFeedbackHandler(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Registers a commit feedback handler that Metal calls with feedback data when available.

## Declaration

```swift
func addFeedbackHandler(_ block: @escaping MTL4CommitFeedbackHandler)
```

## Parameters

- `block`: [MTL4CommitFeedbackHandler](../mtl4commitfeedbackhandler.md) that Metal invokes.

# addFeedbackHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Registers a commit feedback handler that Metal calls with feedback data when available.

## Declaration

```objectivec
- (void) addFeedbackHandler:(MTL4CommitFeedbackHandler) block;
```

## Parameters

- `block`: [MTL4CommitFeedbackHandler](../mtl4commitfeedbackhandler.md) that Metal invokes.
