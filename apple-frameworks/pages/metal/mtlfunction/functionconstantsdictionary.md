> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/functionconstantsdictionary](https://developer.apple.com/documentation/metal/mtlfunction/functionconstantsdictionary)

# functionConstantsDictionary (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A dictionary of function constants for a specialized function.

## Declaration

```swift
var functionConstantsDictionary: [String : MTLFunctionConstant] { get }
```

<a id="discussion"></a>

## Discussion

This property returns a dictionary of the function constants that you need to provide to specialize this function. This property returns an empty dictionary if this function is already specialized or doesn’t declare any function constants.

To create the specialized function, set these constant values in a new [MTLFunctionConstantValues](../mtlfunctionconstantvalues.md) object and call the [makeFunction(name:constantValues:completionHandler:)](../mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md) method.

# functionConstantsDictionary (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A dictionary of function constants for a specialized function.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,MTLFunctionConstant *> * functionConstantsDictionary;
```

<a id="discussion"></a>

## Discussion

This property returns a dictionary of the function constants that you need to provide to specialize this function. This property returns an empty dictionary if this function is already specialized or doesn’t declare any function constants.

To create the specialized function, set these constant values in a new [MTLFunctionConstantValues](../mtlfunctionconstantvalues.md) object and call the [newFunctionWithName:constantValues:completionHandler:](../mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md) method.
