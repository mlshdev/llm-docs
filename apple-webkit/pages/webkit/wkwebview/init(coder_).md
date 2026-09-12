> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/init(coder:)](https://developer.apple.com/documentation/webkit/wkwebview/init(coder:))

# init(coder:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns an object initialized from data in the specified coder object.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder object that contains the object’s data.

## See Also

### Creating a web view

- [init(frame:configuration:)](init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [configuration](configuration.md): The object that contains the configuration details for the web view.

# initWithCoder: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns an object initialized from data in the specified coder object.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object that contains the object’s data.

## See Also

### Creating a web view

- [initWithFrame:configuration:](init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [configuration](configuration.md): The object that contains the configuration details for the web view.
