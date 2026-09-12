> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/init(frame:)](https://developer.apple.com/documentation/quicklookui/qlpreviewview/init(frame:))

# init(frame:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 10.6+

Creates a preview view with the provided frame.

## Declaration

```swift
init!(frame: NSRect)
```

## Parameters

- `frame`: The frame rectangle for the initialized `QLPreviewView` object.

<a id="return-value"></a>

## Return Value

Returns a `QLPreviewView` object with the designated frame and the default style.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [init(frame:style:)](init%28frame_style_%29.md) with the `style` parameter being [QLPreviewViewStyle.normal](../qlpreviewviewstyle/normal.md).

## See Also

### Creating a Preview View

- [init(frame:style:)](init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [QLPreviewViewStyle](../qlpreviewviewstyle.md): Styles for a Preview View.

# initWithFrame: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates a preview view with the provided frame.

## Declaration

```objectivec
- (id) initWithFrame:(NSRect) frame;
```

## Parameters

- `frame`: The frame rectangle for the initialized `QLPreviewView` object.

<a id="return-value"></a>

## Return Value

Returns a `QLPreviewView` object with the designated frame and the default style.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [initWithFrame:style:](init%28frame_style_%29.md) with the `style` parameter being [QLPreviewViewStyleNormal](../qlpreviewviewstyle/normal.md).

## See Also

### Creating a Preview View

- [initWithFrame:style:](init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [QLPreviewViewStyle](../qlpreviewviewstyle.md): Styles for a Preview View.
