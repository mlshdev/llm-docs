> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/parameterkeypath](https://developer.apple.com/documentation/intents/inparameter/parameterkeypath)

# parameterKeyPath (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The key path to a property of an interaction object.

## Declaration

```swift
var parameterKeyPath: String { get }
```

<a id="Discussion"></a>

## Discussion

This string defines the location of a property in an [INInteraction](../ininteraction.md) object. For example, in the pickup location of a ride request intent, the key path would be represented by the string `pickupLocation`.

## See Also

### Getting the Parameter Details

- [parameterClass](parameterclass.md): The type of object represented by this parameter.

# parameterKeyPath (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The key path to a property of an interaction object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * parameterKeyPath;
```

<a id="Discussion"></a>

## Discussion

This string defines the location of a property in an [INInteraction](../ininteraction.md) object. For example, in the pickup location of a ride request intent, the key path would be represented by the string `pickupLocation`.

## See Also

### Getting the Parameter Details

- [parameterClass](parameterclass.md): The type of object represented by this parameter.
