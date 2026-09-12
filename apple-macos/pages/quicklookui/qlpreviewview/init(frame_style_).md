> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/init(frame:style:)](https://developer.apple.com/documentation/quicklookui/qlpreviewview/init(frame:style:))

# init(frame:style:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a preview view with the provided frame and style.

## Declaration

```swift
init!(frame: NSRect, style: QLPreviewViewStyle)
```

## Parameters

- `frame`: The frame rectangle for the initialized `QLPreviewView` object.
- `style`: The desired style for the `QLPreviewView` object. For a list of possible styles, see [QLPreviewViewStyle](../qlpreviewviewstyle.md).

<a id="return-value"></a>

## Return Value

Returns a `QLPreviewView` object with the designated frame and style.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the `QLPreviewView` class.

## See Also

### Creating a Preview View

- [init(frame:)](init%28frame_%29.md): Creates a preview view with the provided frame.
- [QLPreviewViewStyle](../qlpreviewviewstyle.md): Styles for a Preview View.

# initWithFrame:style: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a preview view with the provided frame and style.

## Declaration

```objectivec
- (id) initWithFrame:(NSRect) frame style:(QLPreviewViewStyle) style;
```

## Parameters

- `frame`: The frame rectangle for the initialized `QLPreviewView` object.
- `style`: The desired style for the `QLPreviewView` object. For a list of possible styles, see [QLPreviewViewStyle](../qlpreviewviewstyle.md).

<a id="return-value"></a>

## Return Value

Returns a `QLPreviewView` object with the designated frame and style.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the `QLPreviewView` class.

## See Also

### Creating a Preview View

- [initWithFrame:](init%28frame_%29.md): Creates a preview view with the provided frame.
- [QLPreviewViewStyle](../qlpreviewviewstyle.md): Styles for a Preview View.
