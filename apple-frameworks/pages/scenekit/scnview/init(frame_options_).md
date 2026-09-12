> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/init(frame:options:)](https://developer.apple.com/documentation/scenekit/scnview/init(frame:options:))

# init(frame:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.

## Declaration

```swift
init(frame: CGRect, options: [String : Any]? = nil)
```

```swift
init(frame: NSRect, options: [String : Any]? = nil)
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points and specified in the coordinate system of its superview.
- `options`: Rendering options for the view. See [SCNView](../scnview.md).

<a id="return-value"></a>

## Return Value

An initialized view object, or `nil` if the object couldn’t be created.

## See Also

### Initializing a SceneKit View

- [SCNView.Option](option.md): Dictionary keys specifying initialization options, used when initializing a SceneKit view.

# initWithFrame:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame options:(NSDictionary<NSString *,id> *) options;
```

```objectivec
- (instancetype) initWithFrame:(NSRect) frame options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points and specified in the coordinate system of its superview.
- `options`: Rendering options for the view. See [SCNView](../scnview.md).

<a id="return-value"></a>

## Return Value

An initialized view object, or `nil` if the object couldn’t be created.

## See Also

### Initializing a SceneKit View

- [SCNViewOption](option.md): Dictionary keys specifying initialization options, used when initializing a SceneKit view.
