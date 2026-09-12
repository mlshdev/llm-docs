> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/init(identifier:display:pronunciationhint:subtitle:image:)](https://developer.apple.com/documentation/intents/inobject/init(identifier:display:pronunciationhint:subtitle:image:))

# init(identifier:display:pronunciationHint:subtitle:image:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a custom intent object with the specified attributes.

## Declaration

```swift
convenience init(identifier: String?, display displayString: String, pronunciationHint: String?, subtitle subtitleString: String?, image displayImage: INImage?)
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that concisely describes the custom object.
- `pronunciationHint`: A pronunciation hint for the custom object.
- `subtitleString`: A string that adds secondary information about the object.
- `displayImage`: An image representing the object.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [init(identifier:display:subtitle:image:)](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [init(identifier:display:)](init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [init(identifier:display:pronunciationHint:)](init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.

# initWithIdentifier:displayString:pronunciationHint:subtitleString:displayImage: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a custom intent object with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayString:(NSString *) displayString pronunciationHint:(NSString *) pronunciationHint subtitleString:(NSString *) subtitleString displayImage:(INImage *) displayImage;
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that concisely describes the custom object.
- `pronunciationHint`: A pronunciation hint for the custom object.
- `subtitleString`: A string that adds secondary information about the object.
- `displayImage`: An image representing the object.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [initWithIdentifier:displayString:subtitleString:displayImage:](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [initWithIdentifier:displayString:](init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [initWithIdentifier:displayString:pronunciationHint:](init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.
