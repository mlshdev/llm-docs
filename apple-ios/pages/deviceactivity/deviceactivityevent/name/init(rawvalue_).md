> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/name/init(rawvalue:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/name/init(rawvalue:))

# init(rawValue:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new instance with the specified raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

<a id="discussion"></a>

## Discussion

The following code example prints the specified raw value.

```swift
extension DeviceActivityEvent.Name {
    static let event = Self("Event")
}

print(DeviceActivityEvent.Name.event.rawValue)
// Prints "Event".
```

## See Also

### Creating an Instance

- [init(\_:)](init%28__%29.md): Creates a new instance with the specified raw value.
