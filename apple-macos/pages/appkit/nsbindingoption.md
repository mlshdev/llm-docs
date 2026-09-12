> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbindingoption](https://developer.apple.com/documentation/appkit/nsbindingoption)

# NSBindingOption (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct NSBindingOption
```

<a id="Discussion"></a>

## Discussion

Values that are used as keys in the options dictionary passed to the [bind(\_:to:withKeyPath:options:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/bind%28_:to:withkeypath:options:%29) method.

These keys are also used in the dictionary returned as the [options](nsbindinginfokey/options.md) value of [infoForBinding(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/infoforbinding%28_:%29). For more information, see [Cocoa Bindings](cocoa-bindings.md).

## Topics

### Binding Options

- [allowsEditingMultipleValuesSelection](nsbindingoption/allowseditingmultiplevaluesselection.md): An `NSNumber` object containing a Boolean value that determines if the binding allows editing when the value represents a multiple selection.
- [allowsNullArgument](nsbindingoption/allowsnullargument.md): An `NSNumber` object containing a Boolean value that determines if the argument bindings allows passing argument values of `nil`.
- [alwaysPresentsApplicationModalAlerts](nsbindingoption/alwayspresentsapplicationmodalalerts.md): A number containing a Boolean value that determines if validation and error alert panels displayed as a result of this binding are displayed as application modal alerts.
- [conditionallySetsEditable](nsbindingoption/conditionallysetseditable.md): An `NSNumber` object containing a Boolean value that determines if the editable state of the user interface item is automatically configured based on the controller’s selection.
- [conditionallySetsEnabled](nsbindingoption/conditionallysetsenabled.md): An `NSNumber` object containing a Boolean value that determines if the enabled state of the user interface item is automatically configured based on the controller’s selection.
- [conditionallySetsHidden](nsbindingoption/conditionallysetshidden.md): An `NSNumber` object containing a Boolean value that determines if the hidden state of the user interface item is automatically configured based on the controller’s selection.
- [contentPlacementTag](nsbindingoption/contentplacementtag.md): A number that specifies the tag id of the popup menu item to replace with the content of the array.
- [continuouslyUpdatesValue](nsbindingoption/continuouslyupdatesvalue.md): An `NSNumber` object containing a Boolean value that determines whether the value of the binding is updated as edits are made to the user interface item or is updated only when the user interface item resigns as the responder.
- [createsSortDescriptor](nsbindingoption/createssortdescriptor.md): An `NSNumber` object containing a Boolean value that determines if a sort descriptor is created for a table column.
- [deletesObjectsOnRemove](nsbindingoption/deletesobjectsonremove.md): An `NSNumber` object containing a Boolean value that determines if an object is deleted from the managed context immediately upon being removed from a relationship.
- [displayName](nsbindingoption/displayname.md): An `NSString` object containing a human readable string to be displayed for a predicate.
- [displayPattern](nsbindingoption/displaypattern.md): An `NSString` object that specifies a format string used to construct the final value of a string.
- [handlesContentAsCompoundValue](nsbindingoption/handlescontentascompoundvalue.md): An `NSNumber` object containing a Boolean value that determines if the content is treated as a compound value.
- [insertsNullPlaceholder](nsbindingoption/insertsnullplaceholder.md): An `NSNumber` object containing a Boolean value that determines if an additional item which represents `nil` is inserted into a matrix or pop-up menu before the items in the content array.
- [invokesSeparatelyWithArrayObjects](nsbindingoption/invokesseparatelywitharrayobjects.md): An `NSNumber` object containing a Boolean value that determines whether the specified selector is invoked with the array as the argument or is invoked repeatedly with each array item as an argument.
- [multipleValuesPlaceholder](nsbindingoption/multiplevaluesplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSMultipleValuesMarker` marker for a binding.
- [noSelectionPlaceholder](nsbindingoption/noselectionplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSNoSelectionMarker` marker for a binding.
- [notApplicablePlaceholder](nsbindingoption/notapplicableplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSNotApplicableMarker` marker for a binding.
- [nullPlaceholder](nsbindingoption/nullplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns `nil` for a binding.
- [predicateFormat](nsbindingoption/predicateformat.md): An `NSString` object containing the predicate pattern string for the predicate bindings. Use `$value` to refer to the value in the search field.
- [raisesForNotApplicableKeys](nsbindingoption/raisesfornotapplicablekeys.md): An `NSNumber` object containing a Boolean value that specifies if an exception is raised when the binding is bound to a key that is not applicable—for example when an object is not key-value coding compliant for a key.
- [selectorName](nsbindingoption/selectorname.md): An `NSString` object that specifies the method selector invoked by the target binding when the user interface item is clicked.
- [selectsAllWhenSettingContent](nsbindingoption/selectsallwhensettingcontent.md): An `NSNumber` object containing a Boolean value that specifies if all the items in the array controller are selected when the content is set.
- [validatesImmediately](nsbindingoption/validatesimmediately.md): An `NSNumber` object containing a Boolean value that determines if the contents of the binding are validated immediately.
- [valueTransformer](nsbindingoption/valuetransformer.md): An `NSValueTransformer` instance that is applied to the bound value.
- [valueTransformerName](nsbindingoption/valuetransformername.md): The value for this key is an identifier of a registered `NSValueTransformer` instance that is applied to the bound value.

### Initializers

- [init(rawValue:)](nsbindingoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Key-Value Data

- [NSDictionaryController](nsdictionarycontroller.md): A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.
- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSIsControllerMarker(\_:)](nsiscontrollermarker%28__%29.md): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.

# NSBindingOption (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef NSString * NSBindingOption;
```

<a id="Discussion"></a>

## Discussion

Values that are used as keys in the options dictionary passed to the [bind:toObject:withKeyPath:options:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/bind%28_:to:withkeypath:options:%29) method.

These keys are also used in the dictionary returned as the [NSOptionsKey](nsbindinginfokey/options.md) value of [infoForBinding:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/infoforbinding%28_:%29). For more information, see [Cocoa Bindings](cocoa-bindings.md).

## Topics

### Binding Options

- [NSAllowsEditingMultipleValuesSelectionBindingOption](nsbindingoption/allowseditingmultiplevaluesselection.md): An `NSNumber` object containing a Boolean value that determines if the binding allows editing when the value represents a multiple selection.
- [NSAllowsNullArgumentBindingOption](nsbindingoption/allowsnullargument.md): An `NSNumber` object containing a Boolean value that determines if the argument bindings allows passing argument values of `nil`.
- [NSAlwaysPresentsApplicationModalAlertsBindingOption](nsbindingoption/alwayspresentsapplicationmodalalerts.md): A number containing a Boolean value that determines if validation and error alert panels displayed as a result of this binding are displayed as application modal alerts.
- [NSConditionallySetsEditableBindingOption](nsbindingoption/conditionallysetseditable.md): An `NSNumber` object containing a Boolean value that determines if the editable state of the user interface item is automatically configured based on the controller’s selection.
- [NSConditionallySetsEnabledBindingOption](nsbindingoption/conditionallysetsenabled.md): An `NSNumber` object containing a Boolean value that determines if the enabled state of the user interface item is automatically configured based on the controller’s selection.
- [NSConditionallySetsHiddenBindingOption](nsbindingoption/conditionallysetshidden.md): An `NSNumber` object containing a Boolean value that determines if the hidden state of the user interface item is automatically configured based on the controller’s selection.
- [NSContentPlacementTagBindingOption](nsbindingoption/contentplacementtag.md): A number that specifies the tag id of the popup menu item to replace with the content of the array.
- [NSContinuouslyUpdatesValueBindingOption](nsbindingoption/continuouslyupdatesvalue.md): An `NSNumber` object containing a Boolean value that determines whether the value of the binding is updated as edits are made to the user interface item or is updated only when the user interface item resigns as the responder.
- [NSCreatesSortDescriptorBindingOption](nsbindingoption/createssortdescriptor.md): An `NSNumber` object containing a Boolean value that determines if a sort descriptor is created for a table column.
- [NSDeletesObjectsOnRemoveBindingsOption](nsbindingoption/deletesobjectsonremove.md): An `NSNumber` object containing a Boolean value that determines if an object is deleted from the managed context immediately upon being removed from a relationship.
- [NSDisplayNameBindingOption](nsbindingoption/displayname.md): An `NSString` object containing a human readable string to be displayed for a predicate.
- [NSDisplayPatternBindingOption](nsbindingoption/displaypattern.md): An `NSString` object that specifies a format string used to construct the final value of a string.
- [NSHandlesContentAsCompoundValueBindingOption](nsbindingoption/handlescontentascompoundvalue.md): An `NSNumber` object containing a Boolean value that determines if the content is treated as a compound value.
- [NSInsertsNullPlaceholderBindingOption](nsbindingoption/insertsnullplaceholder.md): An `NSNumber` object containing a Boolean value that determines if an additional item which represents `nil` is inserted into a matrix or pop-up menu before the items in the content array.
- [NSInvokesSeparatelyWithArrayObjectsBindingOption](nsbindingoption/invokesseparatelywitharrayobjects.md): An `NSNumber` object containing a Boolean value that determines whether the specified selector is invoked with the array as the argument or is invoked repeatedly with each array item as an argument.
- [NSMultipleValuesPlaceholderBindingOption](nsbindingoption/multiplevaluesplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSMultipleValuesMarker` marker for a binding.
- [NSNoSelectionPlaceholderBindingOption](nsbindingoption/noselectionplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSNoSelectionMarker` marker for a binding.
- [NSNotApplicablePlaceholderBindingOption](nsbindingoption/notapplicableplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns the `NSNotApplicableMarker` marker for a binding.
- [NSNullPlaceholderBindingOption](nsbindingoption/nullplaceholder.md): An object that is used as a placeholder when the key path of the bound controller returns `nil` for a binding.
- [NSPredicateFormatBindingOption](nsbindingoption/predicateformat.md): An `NSString` object containing the predicate pattern string for the predicate bindings. Use `$value` to refer to the value in the search field.
- [NSRaisesForNotApplicableKeysBindingOption](nsbindingoption/raisesfornotapplicablekeys.md): An `NSNumber` object containing a Boolean value that specifies if an exception is raised when the binding is bound to a key that is not applicable—for example when an object is not key-value coding compliant for a key.
- [NSSelectorNameBindingOption](nsbindingoption/selectorname.md): An `NSString` object that specifies the method selector invoked by the target binding when the user interface item is clicked.
- [NSSelectsAllWhenSettingContentBindingOption](nsbindingoption/selectsallwhensettingcontent.md): An `NSNumber` object containing a Boolean value that specifies if all the items in the array controller are selected when the content is set.
- [NSValidatesImmediatelyBindingOption](nsbindingoption/validatesimmediately.md): An `NSNumber` object containing a Boolean value that determines if the contents of the binding are validated immediately.
- [NSValueTransformerBindingOption](nsbindingoption/valuetransformer.md): An `NSValueTransformer` instance that is applied to the bound value.
- [NSValueTransformerNameBindingOption](nsbindingoption/valuetransformername.md): The value for this key is an identifier of a registered `NSValueTransformer` instance that is applied to the bound value.

## See Also

### Key-Value Data

- [NSDictionaryController](nsdictionarycontroller.md): A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.
- [NSDictionaryControllerKeyValuePair](nsdictionarycontrollerkeyvaluepair.md): A set of methods implemented by arranged objects to give access to information about those objects.
- [NSBindingName](nsbindingname.md): Values that specify a binding for certain methods.
- [NSBindingInfoKey](nsbindinginfokey.md)
- [NSIsControllerMarker](nsiscontrollermarker%28__%29.md): Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.
- [NSKeyValueBindingCreation](https://developer.apple.com/documentation/objectivec/nskeyvaluebindingcreation): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [Binding dictionary keys](binding-dictionary-keys.md): These constants define keys in the binding information dictionary.
