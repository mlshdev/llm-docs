> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/init(identifier:display:pronunciationhint:)](https://developer.apple.com/documentation/intents/inobject/init(identifier:display:pronunciationhint:))

# init(identifier:display:pronunciationHint:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom intent object with the specified attributes.

## Declaration

```swift
init(identifier: String?, display displayString: String, pronunciationHint: String?)
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that Siri displays that describes the parameter or property.
- `pronunciationHint`: A pronunciation hint for the custom object.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [init(identifier:display:subtitle:image:)](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [init(identifier:display:)](init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [init(identifier:display:pronunciationHint:subtitle:image:)](init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.

# initWithIdentifier:displayString:pronunciationHint: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom intent object with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayString:(NSString *) displayString pronunciationHint:(NSString *) pronunciationHint;
```

## Parameters

- `identifier`: A string that identifies the custom object within your app.
- `displayString`: A string that Siri displays that describes the parameter or property.
- `pronunciationHint`: A pronunciation hint for the custom object.

<a id="return-value"></a>

## Return Value

A new [INObject](../inobject.md), or `nil` if the initializer couldn’t create the object.

## See Also

### Creating a Custom Object

- [initWithIdentifier:displayString:subtitleString:displayImage:](init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [initWithIdentifier:displayString:](init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [initWithIdentifier:displayString:pronunciationHint:subtitleString:displayImage:](init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.
