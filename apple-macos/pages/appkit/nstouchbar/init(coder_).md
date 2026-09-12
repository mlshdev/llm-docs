> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/init(coder:)](https://developer.apple.com/documentation/appkit/nstouchbar/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a Touch Bar object from a coder object provided by a storyboard or NIB file.

## Declaration

```swift
init?(coder: NSCoder)
```

<a id="return-value"></a>

## Return Value

A fully initialized Touch Bar object, or `nil` if the coder doesn’t define a Touch Bar object.

## See Also

### Creating a bar

- [init()](init%28%29.md): Creates a Touch Bar object.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a Touch Bar object from a coder object provided by a storyboard or NIB file.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

<a id="return-value"></a>

## Return Value

A fully initialized Touch Bar object, or `nil` if the coder doesn’t define a Touch Bar object.

## See Also

### Creating a bar

- [init](init%28%29.md): Creates a Touch Bar object.
