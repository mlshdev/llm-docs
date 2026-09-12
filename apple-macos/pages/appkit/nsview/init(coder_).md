> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/init(coder:)](https://developer.apple.com/documentation/appkit/nsview/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a view using from data in the specified coder object.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder object that contains the view’s configuration details.

<a id="return-value"></a>

## Return Value

An initialized view or `nil` if AppKit couldn’t create the object.

## See Also

### Creating a view object

- [init(frame:)](init%28frame_%29.md): Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.
- [prepareForReuse()](prepareforreuse%28%29.md): Restores the view to an initial state so that it can be reused.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a view using from data in the specified coder object.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object that contains the view’s configuration details.

<a id="return-value"></a>

## Return Value

An initialized view or `nil` if AppKit couldn’t create the object.

## See Also

### Creating a view object

- [initWithFrame:](init%28frame_%29.md): Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.
- [prepareForReuse](prepareforreuse%28%29.md): Restores the view to an initial state so that it can be reused.
