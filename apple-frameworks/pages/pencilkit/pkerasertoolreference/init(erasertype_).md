> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertoolreference/init(erasertype:)](https://developer.apple.com/documentation/pencilkit/pkerasertoolreference/init(erasertype:))

# init(eraserType:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an eraser tool object that removes objects wholly or partially from a canvas view.

## Declaration

```swift
init(eraserType: __PKEraserType)
```

## Parameters

- `eraserType`: A constant that determines how the eraser affects drawn content. For a list of possible values, see [PKEraserType](../pkerasertype.md).

<a id="return-value"></a>

## Return Value

A new eraser tool object.

## See Also

### Creating an eraser tool

- [init(eraserType:width:)](init%28erasertype_width_%29.md)

# initWithEraserType: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an eraser tool object that removes objects wholly or partially from a canvas view.

## Declaration

```objectivec
- (instancetype) initWithEraserType:(PKEraserType) eraserType;
```

## Parameters

- `eraserType`: A constant that determines how the eraser affects drawn content. For a list of possible values, see [PKEraserType](../pkerasertype.md).

<a id="return-value"></a>

## Return Value

A new eraser tool object.

## See Also

### Creating an eraser tool

- [initWithEraserType:width:](init%28erasertype_width_%29.md)
