> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/deprecated-symbols](https://developer.apple.com/documentation/objectivec/deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

Review symbols that are no longer supported and find the replacements to use instead.

## Topics

### Deprecated Class Methods

- [defaultPlaceholder(for:with:)](nsobject-swift.class/defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setDefaultPlaceholder(\_:for:with:)](nsobject-swift.class/setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [useStoredAccessor()](nsobject-swift.class/usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValue(forKey:)](nsobject-swift.class/storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](nsobject-swift.class/takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

### Deprecated Methods

- [accessibilityAttributeNames()](nsobject-swift.class/accessibilityattributenames%28%29.md): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue(\_:)](nsobject-swift.class/accessibilityattributevalue%28__%29.md): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue(\_:forParameter:)](nsobject-swift.class/accessibilityattributevalue%28__forparameter_%29.md): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityActionDescription(\_:)](nsobject-swift.class/accessibilityactiondescription%28__%29.md): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames()](nsobject-swift.class/accessibilityactionnames%28%29.md): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount(\_:)](nsobject-swift.class/accessibilityarrayattributecount%28__%29.md): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues(\_:index:maxCount:)](nsobject-swift.class/accessibilityarrayattributevalues%28__index_maxcount_%29.md): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityIndex(ofChild:)](nsobject-swift.class/accessibilityindex%28ofchild_%29.md): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable(\_:)](nsobject-swift.class/accessibilityisattributesettable%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityIsIgnored()](nsobject-swift.class/accessibilityisignored%28%29.md): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames()](nsobject-swift.class/accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction(\_:)](nsobject-swift.class/accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue(\_:forAttribute:)](nsobject-swift.class/accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue(\_:forAttribute:)](nsobject-swift.class/accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager(\_:shouldProceedAfterError:)](nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [finalize()](nsobject-swift.class/finalize%28%29.md): Deprecated. The garbage collector invokes this method on the receiver before disposing of the memory it uses.
- [fontManager(\_:willIncludeFont:)](nsobject-swift.class/fontmanager%28__willincludefont_%29.md): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
- [namesOfPromisedFilesDropped(atDestination:)](nsobject-swift.class/namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Returns the names of the files that the receiver promises to create at a specified location.
- [storedValue(forKey:)](nsobject-swift.class/storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [textStorageDidProcessEditing(\_:)](nsobject-swift.class/textstoragedidprocessediting%28__%29.md): Deprecated.
- [textStorageWillProcessEditing(\_:)](nsobject-swift.class/textstoragewillprocessediting%28__%29.md): Deprecated.
- [takeStoredValue(\_:forKey:)](nsobject-swift.class/takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValue(\_:forKey:)](nsobject-swift.class/takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [takeValue(\_:forKeyPath:)](nsobject-swift.class/takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValues(from:)](nsobject-swift.class/takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [unableToSetNil(forKey:)](nsobject-swift.class/unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [values(forKeys:)](nsobject-swift.class/values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.
- [workflowController(\_:didError:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:diderror:%29): Notifies the delegate when the workflow encounters an error.
- [workflowController(\_:didRun:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:didrun:%29): Notifies the delegate when the specified action finishes running.
- [workflowController(\_:willRun:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:willrun:%29): Notifies the delegate when the specified action is about to run.
- [workflowControllerDidRun(\_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidrun%28_:%29): Notifies the delegate when the workflow controller object finishes running.
- [workflowControllerDidStop(\_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidstop%28_:%29): Tells the delegate that the workflow controller object has stopped.
- [workflowControllerWillRun(\_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillrun%28_:%29): Notifies the delegate when the workflow controller object is about to run.
- [workflowControllerWillStop(\_:)](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillstop%28_:%29): Tells the delegate that the workflow controller object is about to stop.

# Deprecated Symbols (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

Review symbols that are no longer supported and find the replacements to use instead.

## Topics

### Deprecated Class Methods

- [defaultPlaceholderForMarker:withBinding:](nsobject-swift.class/defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setDefaultPlaceholder:forMarker:withBinding:](nsobject-swift.class/setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setKeys:triggerChangeNotificationsForDependentKey:](nsobject-swift.class/setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
- [useStoredAccessor](nsobject-swift.class/usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](nsobject-swift.class/storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](nsobject-swift.class/takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

### Deprecated Methods

- [accessibilityAttributeNames](nsobject-swift.class/accessibilityattributenames%28%29.md): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue:](nsobject-swift.class/accessibilityattributevalue%28__%29.md): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue:forParameter:](nsobject-swift.class/accessibilityattributevalue%28__forparameter_%29.md): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityActionDescription:](nsobject-swift.class/accessibilityactiondescription%28__%29.md): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames](nsobject-swift.class/accessibilityactionnames%28%29.md): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount:](nsobject-swift.class/accessibilityarrayattributecount%28__%29.md): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues:index:maxCount:](nsobject-swift.class/accessibilityarrayattributevalues%28__index_maxcount_%29.md): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityIndexOfChild:](nsobject-swift.class/accessibilityindex%28ofchild_%29.md): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable:](nsobject-swift.class/accessibilityisattributesettable%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityIsIgnored](nsobject-swift.class/accessibilityisignored%28%29.md): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames](nsobject-swift.class/accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction:](nsobject-swift.class/accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue:forAttribute:](nsobject-swift.class/accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue:forAttribute:](nsobject-swift.class/accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager:shouldProceedAfterError:](nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [finalize](nsobject-swift.class/finalize%28%29.md): Deprecated. The garbage collector invokes this method on the receiver before disposing of the memory it uses.
- [fontManager:willIncludeFont:](nsobject-swift.class/fontmanager%28__willincludefont_%29.md): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
- [namesOfPromisedFilesDroppedAtDestination:](nsobject-swift.class/namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Returns the names of the files that the receiver promises to create at a specified location.
- [replacementObjectForPortCoder:](nsobject-swift.class/replacementobjectforportcoder_.md): Deprecated. Overridden by subclasses to substitute another object or a copy for itself during distribution encoding.
- [storedValueForKey:](nsobject-swift.class/storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [textStorageDidProcessEditing:](nsobject-swift.class/textstoragedidprocessediting%28__%29.md): Deprecated.
- [textStorageWillProcessEditing:](nsobject-swift.class/textstoragewillprocessediting%28__%29.md): Deprecated.
- [takeStoredValue:forKey:](nsobject-swift.class/takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValue:forKey:](nsobject-swift.class/takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [takeValue:forKeyPath:](nsobject-swift.class/takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValuesFromDictionary:](nsobject-swift.class/takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [unableToSetNilForKey:](nsobject-swift.class/unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [valuesForKeys:](nsobject-swift.class/values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.
- [workflowController:didError:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:diderror:%29): Notifies the delegate when the workflow encounters an error.
- [workflowController:didRunAction:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:didrun:%29): Notifies the delegate when the specified action finishes running.
- [workflowController:willRunAction:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontroller%28_:willrun:%29): Notifies the delegate when the specified action is about to run.
- [workflowControllerDidRun:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidrun%28_:%29): Notifies the delegate when the workflow controller object finishes running.
- [workflowControllerDidStop:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerdidstop%28_:%29): Tells the delegate that the workflow controller object has stopped.
- [workflowControllerWillRun:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillrun%28_:%29): Notifies the delegate when the workflow controller object is about to run.
- [workflowControllerWillStop:](https://developer.apple.com/documentation/automator/amworkflowcontrollerdelegate/workflowcontrollerwillstop%28_:%29): Tells the delegate that the workflow controller object is about to stop.
