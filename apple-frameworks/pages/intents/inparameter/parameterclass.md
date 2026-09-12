> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/parameterclass](https://developer.apple.com/documentation/intents/inparameter/parameterclass)

# parameterClass (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of object represented by this parameter.

## Declaration

```swift
var parameterClass: AnyClass { get }
```

<a id="Discussion"></a>

## Discussion

When fetching the parameter’s value, you can use the class information in this property to obtain the type information for that value.

## See Also

### Getting the Parameter Details

- [parameterKeyPath](parameterkeypath.md): The key path to a property of an interaction object.

# parameterClass (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of object represented by this parameter.

## Declaration

```objectivec
@property (nonatomic, readonly) Class parameterClass;
```

<a id="Discussion"></a>

## Discussion

When fetching the parameter’s value, you can use the class information in this property to obtain the type information for that value.

## See Also

### Getting the Parameter Details

- [parameterKeyPath](parameterkeypath.md): The key path to a property of an interaction object.
