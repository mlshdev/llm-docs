> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/init(data:)](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/init(data:))

# init(data:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a drawing object and populates it with previously drawn content.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: The initial data to add to the canvas. Only specify data you previously obtained from a canvas view.

<a id="return-value"></a>

## Return Value

A new canvas object initialized with the specified data.

## See Also

### Creating a drawing object

- [init(strokes:)](init%28strokes_%29.md): Creates a drawing object with the strokes you supply.
- [init()](init%28%29.md): Creates an empty drawing object.

# initWithData:error: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a drawing object and populates it with previously drawn content.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: The initial data to add to the canvas. Only specify data you previously obtained from a canvas view.
- `error`: On input, a variable to use for storing an error. If an error occurs, the initializer replaces this parameter with an `NSError` object that contains information about the error that occurred. Specify `nil` to ignore errors.

<a id="return-value"></a>

## Return Value

A new canvas object initialized with the specified data. On failure, this method returns `nil`.

## See Also

### Creating a drawing object

- [initWithStrokes:](init%28strokes_%29.md): Creates a drawing object with the strokes you supply.
- [init](init%28%29.md): Creates an empty drawing object.
