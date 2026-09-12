> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/displayname](https://developer.apple.com/documentation/intents/incar/displayname)

# displayName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The electric vehicle’s user-defined display name.

## Declaration

```swift
var displayName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The system displays this value when presenting information about the electric vehicle. The user configures the display name in your app.

## See Also

### Identifying the Car

- [carIdentifier](caridentifier.md): The electric vehicle’s unique identifier.

# displayName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The electric vehicle’s user-defined display name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * displayName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

The system displays this value when presenting information about the electric vehicle. The user configures the display name in your app.

## See Also

### Identifying the Car

- [carIdentifier](caridentifier.md): The electric vehicle’s unique identifier.
