> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscreatecommand/resolvedkeydictionary](https://developer.apple.com/documentation/foundation/nscreatecommand/resolvedkeydictionary)

# resolvedKeyDictionary (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a dictionary that contains the properties that were specified in the `make` Apple event command that has been converted to this `NSCreateCommand` object.

## Declaration

```swift
var resolvedKeyDictionary: [String : Any] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties that were specified in the `make` Apple event script command that has been converted to this `NSCreateCommand` object.

<a id="Discussion"></a>

## Discussion

The keys in the returned dictionary are the names of properties (attributes or relationships, in the script suite) that have been specified for the command, and the corresponding values in the dictionary are the values that those properties should take. The required and optional arguments for the `make` command are specified in the core suite definition, `NSCoreSuite.scriptSuite`.

## See Also

### Getting information about a create command

- [createClassDescription](createclassdescription.md): Returns the class description for the class that is to be created.

# resolvedKeyDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a dictionary that contains the properties that were specified in the `make` Apple event command that has been converted to this `NSCreateCommand` object.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * resolvedKeyDictionary;
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties that were specified in the `make` Apple event script command that has been converted to this `NSCreateCommand` object.

<a id="Discussion"></a>

## Discussion

The keys in the returned dictionary are the names of properties (attributes or relationships, in the script suite) that have been specified for the command, and the corresponding values in the dictionary are the values that those properties should take. The required and optional arguments for the `make` command are specified in the core suite definition, `NSCoreSuite.scriptSuite`.

## See Also

### Getting information about a create command

- [createClassDescription](createclassdescription.md): Returns the class description for the class that is to be created.
