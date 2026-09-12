> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/init(frame:device:)](https://developer.apple.com/documentation/metalkit/mtkview/init(frame:device:))

# init(frame:device:) (Swift)

**Framework:** MetalKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a view with the specified frame rectangle and Metal device.

## Declaration

```swift
init(frame frameRect: CGRect, device: (any MTLDevice)?)
```

## Parameters

- `frameRect`: The frame rectangle for the view.
- `device`: The Metal device object to use.

<a id="return-value"></a>

## Return Value

An initialized view object.

## See Also

### Creating a View

- [init(coder:)](init%28coder_%29.md): Initializes a view from data in a given unarchiver.

# initWithFrame:device: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a view with the specified frame rectangle and Metal device.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frameRect device:(id<MTLDevice>) device;
```

## Parameters

- `frameRect`: The frame rectangle for the view.
- `device`: The Metal device object to use.

<a id="return-value"></a>

## Return Value

An initialized view object.

## See Also

### Creating a View

- [initWithCoder:](init%28coder_%29.md): Initializes a view from data in a given unarchiver.
