> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/delete(in:to:)](https://developer.apple.com/documentation/browserenginekit/betextinput/delete(in:to:))

# delete(in:to:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Deletes the specified amount of text.

## Declaration

```swift
func delete(in direction: UITextStorageDirection, to granularity: UITextGranularity)
```

## Parameters

- `direction`: The direction in which to delete text, relative to the base writing direction.
- `granularity`: The amount of text to delete.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The editing behavior-to-key combinations include:

- **Character backward**: Delete
- **Character forward**: Delete forward (Function + Delete)
- **Word backward**: Option + Delete
- **Word forward**: Option + Delete forward (Function + Delete)
- **Line end**: Command + Delete
- **Line start**: Command + Delete forward (Function + Delete)
- **Paragraph end**: Control + K
- **Paragraph start**: Control + Function + K

# deleteInDirection:toGranularity: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Deletes the specified amount of text.

## Declaration

```objectivec
- (void) deleteInDirection:(UITextStorageDirection) direction toGranularity:(UITextGranularity) granularity;
```

## Parameters

- `direction`: The direction in which to delete text, relative to the base writing direction.
- `granularity`: The amount of text to delete.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The editing behavior-to-key combinations include:

- **Character backward**: Delete
- **Character forward**: Delete forward (Function + Delete)
- **Word backward**: Option + Delete
- **Word forward**: Option + Delete forward (Function + Delete)
- **Line end**: Command + Delete
- **Line start**: Command + Delete forward (Function + Delete)
- **Paragraph end**: Control + K
- **Paragraph start**: Control + Function + K
