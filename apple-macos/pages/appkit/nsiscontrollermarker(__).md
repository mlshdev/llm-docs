> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsiscontrollermarker(_:)](https://developer.apple.com/documentation/appkit/nsiscontrollermarker(_:))

# NSIsControllerMarker(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

## Declaration

```swift
func NSIsControllerMarker(_ object: Any?) -> Bool
```

## Parameters

- `object`: Specify the object you want to check. This parameter can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object is one of the designated controller markers or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

This function helps you to create bindings between user interface elements and controller objects. The Application Kit predefines several special marker objects used as values for indicating selection state; currently these are [NSMultipleValuesMarker](nsmultiplevaluesmarker.md), [NSNoSelectionMarker](nsnoselectionmarker.md), and [NSNotApplicableMarker](nsnotapplicablemarker.md). These markers are typed as `id` and only exist for the purpose of indicating a state; they are never archived and cannot be used as object values in controls. You use this function to test whether a given object value is a marker, in which case it is not directly assignable to the object that is bound. This check is important, especially since additional markers may be added in the future.

See the `NSKeyValueBinding.h` header file for further details.

## See Also

### Key-Value Data

- [NSDictionaryController](nsdictionarycontroller.md): A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.
- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingOption](nsbindingoption.md)
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.

# NSIsControllerMarker (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

## Declaration

```objectivec
extern BOOL NSIsControllerMarker(id object);
```

## Parameters

- `object`: Specify the object you want to check. This parameter can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object is one of the designated controller markers or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

This function helps you to create bindings between user interface elements and controller objects. The Application Kit predefines several special marker objects used as values for indicating selection state; currently these are [NSMultipleValuesMarker](nsmultiplevaluesmarker.md), [NSNoSelectionMarker](nsnoselectionmarker.md), and [NSNotApplicableMarker](nsnotapplicablemarker.md). These markers are typed as `id` and only exist for the purpose of indicating a state; they are never archived and cannot be used as object values in controls. You use this function to test whether a given object value is a marker, in which case it is not directly assignable to the object that is bound. This check is important, especially since additional markers may be added in the future.

See the `NSKeyValueBinding.h` header file for further details.

## See Also

### Key-Value Data

- [NSDictionaryController](nsdictionarycontroller.md): A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.
- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingOption](nsbindingoption.md)
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.
