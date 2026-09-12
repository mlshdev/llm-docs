> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

# NSObject (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.

## Declaration

```swift
class NSObject
```

## Topics

### Initializing a Class

- [initialize()](nsobject-swift.class/initialize%28%29.md): Initializes the class before it receives its first message.
- [load()](nsobject-swift.class/load%28%29.md): Invoked whenever a class or category is added to the Objective-C runtime; implement this method to perform class-specific behavior upon loading.

### Creating, Copying, and Deallocating Objects

- [init()](nsobject-swift.class/init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy()](nsobject-swift.class/copy%28%29.md): Returns the object returned by `copy(with:)`.
- [mutableCopy()](nsobject-swift.class/mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.

### Identifying Classes

- [superclass()](nsobject-swift.class/superclass%28%29.md): Returns the class object for the receiver’s superclass.
- [isSubclass(of:)](nsobject-swift.class/issubclass%28of_%29.md): Returns a Boolean value that indicates whether the receiving class is a subclass of, or identical to, a given class.

### Testing Class Functionality

- [instancesRespond(to:)](nsobject-swift.class/instancesrespond%28to_%29.md): Returns a Boolean value that indicates whether instances of the receiver are capable of responding to a given selector.

### Testing Protocol Conformance

- [conforms(to:)](nsobject-swift.class/conforms%28to_%29.md): Returns a Boolean value that indicates whether the target conforms to a given protocol.

### Obtaining Information About Methods

- [method(for:)](nsobject-swift.class/method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.
- [instanceMethod(for:)](nsobject-swift.class/instancemethod%28for_%29.md): Locates and returns the address of the implementation of the instance method identified by a given selector.

### Describing Objects

- [description()](nsobject-swift.class/description%28%29.md): Returns a string that represents the contents of the receiving class.

### Supporting Discardable Content

- [autoContentAccessingProxy](nsobject-swift.class/autocontentaccessingproxy.md): A proxy for the receiving object

### Sending Messages

- [perform(\_:with:afterDelay:)](nsobject-swift.class/perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [perform(\_:with:afterDelay:inModes:)](nsobject-swift.class/perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector(onMainThread:with:waitUntilDone:modes:)](nsobject-swift.class/performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [perform(\_:on:with:waitUntilDone:)](nsobject-swift.class/perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [perform(\_:on:with:waitUntilDone:modes:)](nsobject-swift.class/perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelector(inBackground:with:)](nsobject-swift.class/performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequests(withTarget:)](nsobject-swift.class/cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](nsobject-swift.class/perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](nsobject-swift.class/cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](nsobject-swift.class/perform%28__with_afterdelay_%29.md).

### Forwarding Messages

- [forwardingTarget(for:)](nsobject-swift.class/forwardingtarget%28for_%29.md): Returns the object to which unrecognized messages should first be directed.

### Dynamically Resolving Methods

- [resolveClassMethod(\_:)](nsobject-swift.class/resolveclassmethod%28__%29.md): Dynamically provides an implementation for a given selector for a class method.
- [resolveInstanceMethod(\_:)](nsobject-swift.class/resolveinstancemethod%28__%29.md): Dynamically provides an implementation for a given selector for an instance method.

### Handling Errors

- [doesNotRecognizeSelector(\_:)](nsobject-swift.class/doesnotrecognizeselector%28__%29.md): Handles messages the receiver doesn’t recognize.

### Archiving

- [awakeAfter(using:)](nsobject-swift.class/awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](nsobject-swift.class/classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](nsobject-swift.class/classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](nsobject-swift.class/classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver()](nsobject-swift.class/classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver()](nsobject-swift.class/classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObject(for:)](nsobject-swift.class/replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](nsobject-swift.class/replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](nsobject-swift.class/replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion(\_:)](nsobject-swift.class/setversion%28__%29.md): Sets the receiver’s version number.
- [version()](nsobject-swift.class/version%28%29.md): Returns the version number assigned to the class.

### Working with Class Descriptions

- [attributeKeys](nsobject-swift.class/attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](nsobject-swift.class/classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverse(forRelationshipKey:)](nsobject-swift.class/inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](nsobject-swift.class/tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](nsobject-swift.class/toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.

### Improving Accessibility

- [UIAccessibility](../uikit/uiaccessibility-protocol.md): A set of methods that provides accessibility information about views and controls in an app’s user interface.
- [UIAccessibilityContainer](../uikit/uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [UIAccessibilityAction](uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityFocus](uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityDragging](uiaccessibilitydragging.md): A pair of properties to allow you to fine-tune how drags and drops are exposed to assistive technologies.

### Improving browser accessibility

- [browserAccessibilityAttributedValue(in:)](nsobject-swift.class/browseraccessibilityattributedvalue%28in_%29.md): Returns the value for this element within the given range, as an attributed string.
- [browserAccessibilityDeleteTextAtCursor(numberOfCharacters:)](nsobject-swift.class/browseraccessibilitydeletetextatcursor%28numberofcharacters_%29.md): Deletes text from the element at the current cursor position.
- [browserAccessibilityInsertTextAtCursor(text:)](nsobject-swift.class/browseraccessibilityinserttextatcursor%28text_%29.md): Inserts text into the element at the current cursor position.
- [browserAccessibilitySelectedTextRange()](nsobject-swift.class/browseraccessibilityselectedtextrange%28%29.md): Returns the range of selected text in the element.
- [browserAccessibilitySetSelectedTextRange(\_:)](nsobject-swift.class/browseraccessibilitysetselectedtextrange%28__%29.md): Updates the element’s selected text.
- [browserAccessibilityValue(in:)](nsobject-swift.class/browseraccessibilityvalue%28in_%29.md): Returns this element’s value in the given range.
- [browserAccessibilityContainerType](nsobject-swift.class/browseraccessibilitycontainertype.md): The kind of container that contains this element.
- [browserAccessibilityCurrentStatus](nsobject-swift.class/browseraccessibilitycurrentstatus.md): A string that’s the element’s value for aria-current.
- [browserAccessibilityHasDOMFocus](nsobject-swift.class/browseraccessibilityhasdomfocus.md): A Boolean value that indicates whether the element has native focus in the browser Document Object Model.
- [browserAccessibilityIsRequired](nsobject-swift.class/browseraccessibilityisrequired.md): A Boolean value that’s the element’s value for aria-required.
- [browserAccessibilityPressedState](nsobject-swift.class/browseraccessibilitypressedstate.md): The element’s value for aria-pressed.
- [browserAccessibilityRoleDescription](nsobject-swift.class/browseraccessibilityroledescription.md): A string that describes the element’s role for assistive technologies.
- [browserAccessibilitySortDirection](nsobject-swift.class/browseraccessibilitysortdirection.md): A string that’s the element’s value for aria-sort.

### Scripting

- [classCode](nsobject-swift.class/classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](nsobject-swift.class/classname.md): A string containing the name of the class.
- [copyScriptingValue(\_:forKey:withProperties:)](nsobject-swift.class/copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObject(of:forValueForKey:withContentsValue:properties:)](nsobject-swift.class/newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](nsobject-swift.class/scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.
- [scriptingValue(for:)](nsobject-swift.class/scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.

### Integrating with Combine

- [NSObject.KeyValueObservingPublisher](nsobject-swift.class/keyvalueobservingpublisher.md): A Combine publisher that produces a new element whenever the observed value changes.

### Key-Value Observing

- [NSKeyValueObserving](nskeyvalueobserving.md): An informal protocol that objects adopt to be notified of changes to the specified properties of other objects.

### Key-Value Coding

- [NSKeyValueBindingCreation](nskeyvaluebindingcreation.md): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [NSKeyValueCoding](nskeyvaluecoding.md): A mechanism by which you can access the properties of an object indirectly by name or key.
- [NSScriptKeyValueCoding](nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptKeyValueCoding Exception Names](nsscriptkeyvaluecoding-exception-names.md): Exceptions raised by key-value coding methods.

### Interacting with Web Plug-ins

- [WebPlugInContainer](webplugincontainer.md): `WebPlugInContainer` is an informal protocol that enables a plug-in to send messages to the application.
- [WebPlugIn](webplugin.md): The `WebPlugIn` informal protocol defines methods that enable interaction between an application using the WebKit framework and any WebKit-based plug-ins it may use.

### Implementing Web Scripting

- [WebScripting](webscripting.md): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.

### Supporting Cocoa Scripting

- [NSScriptingComparisonMethods](nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.

### Customizing accessibility

- [accessibilityElements](nsobject-swift.class/accessibilityelements.md): An array of features of an object that assistive technologies can access.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](deprecated-symbols.md): Review symbols that are no longer supported and find the replacements to use instead.

### Instance Properties

- [accessibilityActivateBlock](nsobject-swift.class/accessibilityactivateblock.md)
- [accessibilityActivationPoint](nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityActivationPointBlock](nsobject-swift.class/accessibilityactivationpointblock.md)
- [accessibilityAttributedHint](nsobject-swift.class/accessibilityattributedhint.md)
- [accessibilityAttributedHintBlock](nsobject-swift.class/accessibilityattributedhintblock.md)
- [accessibilityAttributedLabel](nsobject-swift.class/accessibilityattributedlabel.md)
- [accessibilityAttributedLabelBlock](nsobject-swift.class/accessibilityattributedlabelblock.md)
- [accessibilityAttributedUserInputLabels](nsobject-swift.class/accessibilityattributeduserinputlabels.md)
- [accessibilityAttributedUserInputLabelsBlock](nsobject-swift.class/accessibilityattributeduserinputlabelsblock.md)
- [accessibilityAttributedValue](nsobject-swift.class/accessibilityattributedvalue.md)
- [accessibilityAttributedValueBlock](nsobject-swift.class/accessibilityattributedvalueblock.md)
- [accessibilityContainerType](nsobject-swift.class/accessibilitycontainertype.md)
- [accessibilityContainerTypeBlock](nsobject-swift.class/accessibilitycontainertypeblock.md)
- [accessibilityCustomActionsBlock](nsobject-swift.class/accessibilitycustomactionsblock.md)
- [accessibilityCustomRotors](nsobject-swift.class/accessibilitycustomrotors.md)
- [accessibilityCustomRotorsBlock](nsobject-swift.class/accessibilitycustomrotorsblock.md)
- [accessibilityDecrementBlock](nsobject-swift.class/accessibilitydecrementblock.md)
- [accessibilityDirectTouchOptions](nsobject-swift.class/accessibilitydirecttouchoptions.md)
- [accessibilityElementsBlock](nsobject-swift.class/accessibilityelementsblock.md)
- [accessibilityElementsHidden](nsobject-swift.class/accessibilityelementshidden.md)
- [accessibilityElementsHiddenBlock](nsobject-swift.class/accessibilityelementshiddenblock.md)
- [accessibilityExpandedStatus](nsobject-swift.class/accessibilityexpandedstatus.md)
- [accessibilityExpandedStatusBlock](nsobject-swift.class/accessibilityexpandedstatusblock.md)
- [accessibilityFocusedUIElement](nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](nsobject-swift.class/accessibilityframe.md)
- [accessibilityFrameBlock](nsobject-swift.class/accessibilityframeblock.md)
- [accessibilityHeaderElements](nsobject-swift.class/accessibilityheaderelements.md)
- [accessibilityHeaderElementsBlock](nsobject-swift.class/accessibilityheaderelementsblock.md)
- [accessibilityHint](nsobject-swift.class/accessibilityhint.md)
- [accessibilityHintBlock](nsobject-swift.class/accessibilityhintblock.md)
- [accessibilityIdentifierBlock](nsobject-swift.class/accessibilityidentifierblock.md)
- [accessibilityIncrementBlock](nsobject-swift.class/accessibilityincrementblock.md)
- [accessibilityLabel](nsobject-swift.class/accessibilitylabel.md)
- [accessibilityLabelBlock](nsobject-swift.class/accessibilitylabelblock.md)
- [accessibilityLanguage](nsobject-swift.class/accessibilitylanguage.md)
- [accessibilityLanguageBlock](nsobject-swift.class/accessibilitylanguageblock.md)
- [accessibilityMagicTapBlock](nsobject-swift.class/accessibilitymagictapblock.md)
- [accessibilityNavigationStyle](nsobject-swift.class/accessibilitynavigationstyle.md)
- [accessibilityNavigationStyleBlock](nsobject-swift.class/accessibilitynavigationstyleblock.md)
- [accessibilityNextTextNavigationElement](nsobject-swift.class/accessibilitynexttextnavigationelement.md): An accessibility element that contains text that semantically follows this element’s text.
- [accessibilityNextTextNavigationElementBlock](nsobject-swift.class/accessibilitynexttextnavigationelementblock.md)
- [accessibilityNotifiesWhenDestroyed](nsobject-swift.class/accessibilitynotifieswhendestroyed.md): A Boolean value that indicates whether a custom accessibility object sends a notification when its corresponding UI element is destroyed.
- [accessibilityPath](nsobject-swift.class/accessibilitypath.md)
- [accessibilityPathBlock](nsobject-swift.class/accessibilitypathblock.md)
- [accessibilityPerformEscapeBlock](nsobject-swift.class/accessibilityperformescapeblock.md)
- [accessibilityPreviousTextNavigationElement](nsobject-swift.class/accessibilityprevioustextnavigationelement.md): An accessibility element that contains text that is semantically previous to this element’s text.
- [accessibilityPreviousTextNavigationElementBlock](nsobject-swift.class/accessibilityprevioustextnavigationelementblock.md)
- [accessibilityRespondsToUserInteraction](nsobject-swift.class/accessibilityrespondstouserinteraction.md)
- [accessibilityRespondsToUserInteractionBlock](nsobject-swift.class/accessibilityrespondstouserinteractionblock.md)
- [accessibilityShouldGroupAccessibilityChildrenBlock](nsobject-swift.class/accessibilityshouldgroupaccessibilitychildrenblock.md)
- [accessibilityTextInputResponder](nsobject-swift.class/accessibilitytextinputresponder.md): The object that handles text input calls for this accessibility element.
- [accessibilityTextInputResponderBlock](nsobject-swift.class/accessibilitytextinputresponderblock.md): The block to use to handle text input calls to a backing view.
- [accessibilityTextualContext](nsobject-swift.class/accessibilitytextualcontext.md)
- [accessibilityTextualContextBlock](nsobject-swift.class/accessibilitytextualcontextblock.md)
- [accessibilityTraits](nsobject-swift.class/accessibilitytraits.md)
- [accessibilityTraitsBlock](nsobject-swift.class/accessibilitytraitsblock.md)
- [accessibilityUserInputLabels](nsobject-swift.class/accessibilityuserinputlabels.md)
- [accessibilityUserInputLabelsBlock](nsobject-swift.class/accessibilityuserinputlabelsblock.md)
- [accessibilityValue](nsobject-swift.class/accessibilityvalue.md)
- [accessibilityValueBlock](nsobject-swift.class/accessibilityvalueblock.md)
- [accessibilityViewIsModal](nsobject-swift.class/accessibilityviewismodal.md)
- [accessibilityViewIsModalBlock](nsobject-swift.class/accessibilityviewismodalblock.md)
- [automationElements](nsobject-swift.class/automationelements.md)
- [automationElementsBlock](nsobject-swift.class/automationelementsblock.md)
- [browserAccessibilityDetailsElements](nsobject-swift.class/browseraccessibilitydetailselements.md)
- [browserAccessibilityImageDataSize](nsobject-swift.class/browseraccessibilityimagedatasize-swift.property.md): Returns the native pixel dimensions of the image represented by this element, or `CGSize.zero` if this element does not represent an image.
- [browserAccessibilityKeyboardShortcuts](nsobject-swift.class/browseraccessibilitykeyboardshortcuts.md)
- [browserAccessibilityOrientation](nsobject-swift.class/browseraccessibilityorientation.md)
- [isAccessibilityElement](nsobject-swift.class/isaccessibilityelement.md)
- [isAccessibilityElementBlock](nsobject-swift.class/isaccessibilityelementblock.md)
- [isSelectable](nsobject-swift.class/isselectable.md)
- [objectSpecifier](nsobject-swift.class/objectspecifier.md): Returns an object specifier for the receiver.
- [shouldGroupAccessibilityChildren](nsobject-swift.class/shouldgroupaccessibilitychildren.md)

### Instance Methods

- [acceptsPreviewPanelControl(\_:)](nsobject-swift.class/acceptspreviewpanelcontrol%28__%29.md)
- [accessibilityElement(at:)](nsobject-swift.class/accessibilityelement%28at_%29.md)
- [accessibilityElementCount()](nsobject-swift.class/accessibilityelementcount%28%29.md)
- [accessibilityHitTest(\_:)](nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityHitTest(\_:event:)](nsobject-swift.class/accessibilityhittest%28__event_%29.md)
- [accessibilityLineEndPositionFromCurrentSelection()](nsobject-swift.class/accessibilitylineendpositionfromcurrentselection%28%29.md)
- [accessibilityLineRange(forPosition:)](nsobject-swift.class/accessibilitylinerange%28forposition_%29.md)
- [accessibilityLineStartPositionFromCurrentSelection()](nsobject-swift.class/accessibilitylinestartpositionfromcurrentselection%28%29.md)
- [accessibilityZoomIn(at:)](nsobject-swift.class/accessibilityzoomin%28at_%29.md): Zooms in on the content at the specified point.
- [accessibilityZoomOut(at:)](nsobject-swift.class/accessibilityzoomout%28at_%29.md): Zooms out from the content at the specified point.
- [actionProperty()](nsobject-swift.class/actionproperty%28%29.md): Sent to the delegate to request the property the action applies to.
- [attemptRecovery(fromError:optionIndex:)](nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md): Implemented to attempt a recovery from an error noted in an application-modal dialog.
- [attemptRecovery(fromError:optionIndex:delegate:didRecoverSelector:contextInfo:)](nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md): Implemented to attempt a recovery from an error noted in a document-modal sheet.
- [authorizationViewCreatedAuthorization(\_:)](nsobject-swift.class/authorizationviewcreatedauthorization%28__%29.md): Sent to the delegate to indicate the authorization object has been created or changed.
- [authorizationViewDidAuthorize(\_:)](nsobject-swift.class/authorizationviewdidauthorize%28__%29.md): Sent to the delegate to indicate the user was authorized and the authorization view was changed to unlocked.
- [authorizationViewDidDeauthorize(\_:)](nsobject-swift.class/authorizationviewdiddeauthorize%28__%29.md): Sent to the delegate to indicate the user was deauthorized and the authorization view was changed to locked.
- [authorizationViewDidHide(\_:)](nsobject-swift.class/authorizationviewdidhide%28__%29.md): Sent to the delegate to indicate that the view’s visibility has changed.
- [authorizationViewReleasedAuthorization(\_:)](nsobject-swift.class/authorizationviewreleasedauthorization%28__%29.md): Sent to the delegate to indicate that deauthorization is about to occur.
- [authorizationViewShouldDeauthorize(\_:)](nsobject-swift.class/authorizationviewshoulddeauthorize%28__%29.md): Sent to the delegate when a user clicks the open lock icon.
- [awakeFromNib()](nsobject-swift.class/awakefromnib%28%29.md): Deprecated. Prepares the receiver for service after it has been loaded from an Interface Builder archive, or nib file.
- [beginPreviewPanelControl(\_:)](nsobject-swift.class/beginpreviewpanelcontrol%28__%29.md)
- [browserAccessibilityImageData(\_:)](nsobject-swift.class/browseraccessibilityimagedata%28__%29.md)
- [burnProgressPanel(\_:burnDidFinish:)](nsobject-swift.class/burnprogresspanel%28__burndidfinish_%29.md): Allows the delegate to handle the end-of-burn feedback.
- [burnProgressPanelDidFinish(\_:)](nsobject-swift.class/burnprogresspaneldidfinish%28__%29.md): Notification sent by the panel after ordering out.
- [burnProgressPanelWillBegin(\_:)](nsobject-swift.class/burnprogresspanelwillbegin%28__%29.md): Notification sent by the panel before display.
- [candidates(\_:)](nsobject-swift.class/candidates%28__%29.md): Returns an array of candidates.
- [certificatePanelShowHelp(\_:)](nsobject-swift.class/certificatepanelshowhelp%28__%29.md): Implements custom help behavior for the modal panel.
- [chooseIdentityPanelShowHelp(\_:)](nsobject-swift.class/chooseidentitypanelshowhelp%28__%29.md): Implements custom help behavior for the modal panel.
- [commitComposition(\_:)](nsobject-swift.class/commitcomposition%28__%29.md): Informs the controller that the composition should be committed.
- [composedString(\_:)](nsobject-swift.class/composedstring%28__%29.md): Return the current composed string.
- [compositionParameterView(\_:didChangeParameterWithKey:)](nsobject-swift.class/compositionparameterview%28__didchangeparameterwithkey_%29.md): Deprecated. Called after an input parameter in the composition parameter view has been edited.
- [compositionParameterView(\_:shouldDisplayParameterWithKey:attributes:)](nsobject-swift.class/compositionparameterview%28__shoulddisplayparameterwithkey_attributes_%29.md): Deprecated. Allows you to define which composition parameters are visible in the user interface when the composition parameter view refreshes.
- [compositionPickerView(\_:didSelect:)](nsobject-swift.class/compositionpickerview%28__didselect_%29.md): Deprecated. Performs custom tasks when the selected composition in the composition picker view changes.
- [compositionPickerViewDidStartAnimating(\_:)](nsobject-swift.class/compositionpickerviewdidstartanimating%28__%29.md): Deprecated. Performs custom tasks when the composition picker view starts animating a composition.
- [compositionPickerViewWillStopAnimating(\_:)](nsobject-swift.class/compositionpickerviewwillstopanimating%28__%29.md): Deprecated. Performs custom tasks when the composition picker view stops animating a composition.
- [didCommand(by:client:)](nsobject-swift.class/didcommand%28by_client_%29.md): Processes a command generated by user action such as typing certain keys or pressing the mouse button.
- [doesContain(\_:)](nsobject-swift.class/doescontain%28__%29.md): Returns a Boolean value that indicates whether the receiver contains a given object.
- [endPreviewPanelControl(\_:)](nsobject-swift.class/endpreviewpanelcontrol%28__%29.md)
- [eraseProgressPanel(\_:eraseDidFinish:)](nsobject-swift.class/eraseprogresspanel%28__erasedidfinish_%29.md): Notification sent by the panel before display.
- [eraseProgressPanelDidFinish(\_:)](nsobject-swift.class/eraseprogresspaneldidfinish%28__%29.md): Notification sent by the panel after ordering out.
- [eraseProgressPanelWillBegin(\_:)](nsobject-swift.class/eraseprogresspanelwillbegin%28__%29.md): Notification sent by the panel before display.
- [exceptionHandler(\_:shouldHandle:mask:)](nsobject-swift.class/exceptionhandler%28__shouldhandle_mask_%29.md): Implemented by the delegate to evaluate whether the delegating exception handler should handle a given exception.
- [exceptionHandler(\_:shouldLogException:mask:)](nsobject-swift.class/exceptionhandler%28__shouldlogexception_mask_%29.md): Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.
- [fileTransferServicesAbortComplete(\_:error:)](nsobject-swift.class/filetransferservicesabortcomplete%28__error_%29.md)
- [fileTransferServicesConnectionComplete(\_:error:)](nsobject-swift.class/filetransferservicesconnectioncomplete%28__error_%29.md)
- [fileTransferServicesCopyRemoteFileComplete(\_:error:)](nsobject-swift.class/filetransferservicescopyremotefilecomplete%28__error_%29.md)
- [fileTransferServicesCopyRemoteFileProgress(\_:transferProgress:)](nsobject-swift.class/filetransferservicescopyremotefileprogress%28__transferprogress_%29.md)
- [fileTransferServicesCreateFolderComplete(\_:error:folder:)](nsobject-swift.class/filetransferservicescreatefoldercomplete%28__error_folder_%29.md)
- [fileTransferServicesDisconnectionComplete(\_:error:)](nsobject-swift.class/filetransferservicesdisconnectioncomplete%28__error_%29.md)
- [fileTransferServicesFilePreparationComplete(\_:error:)](nsobject-swift.class/filetransferservicesfilepreparationcomplete%28__error_%29.md)
- [fileTransferServicesPathChangeComplete(\_:error:finalPath:)](nsobject-swift.class/filetransferservicespathchangecomplete%28__error_finalpath_%29.md)
- [fileTransferServicesRemoveItemComplete(\_:error:removedItem:)](nsobject-swift.class/filetransferservicesremoveitemcomplete%28__error_removeditem_%29.md)
- [fileTransferServicesRetrieveFolderListingComplete(\_:error:listing:)](nsobject-swift.class/filetransferservicesretrievefolderlistingcomplete%28__error_listing_%29.md)
- [fileTransferServicesSendFileComplete(\_:error:)](nsobject-swift.class/filetransferservicessendfilecomplete%28__error_%29.md)
- [fileTransferServicesSendFileProgress(\_:transferProgress:)](nsobject-swift.class/filetransferservicessendfileprogress%28__transferprogress_%29.md)
- [handle(\_:client:)](nsobject-swift.class/handle%28__client_%29.md): Handles key down and mouse events.
- [imageBrowser(\_:backgroundWasRightClickedWith:)](nsobject-swift.class/imagebrowser%28__backgroundwasrightclickedwith_%29.md): Performs custom tasks when the user right-clicks the image browser view background.
- [imageBrowser(\_:cellWasDoubleClickedAt:)](nsobject-swift.class/imagebrowser%28__cellwasdoubleclickedat_%29.md): Performs custom tasks when the user double-clicks an item in the image browser view.
- [imageBrowser(\_:cellWasRightClickedAt:with:)](nsobject-swift.class/imagebrowser%28__cellwasrightclickedat_with_%29.md): Performs custom tasks when the user right-clicks an item in the image browser view.
- [imageBrowser(\_:groupAt:)](nsobject-swift.class/imagebrowser%28__groupat_%29.md): Returns the group at the specified index.
- [imageBrowser(\_:itemAt:)](nsobject-swift.class/imagebrowser%28__itemat_%29.md): Returns an object for the item in an image browser view that corresponds to the specified index.
- [imageBrowser(\_:moveItemsAt:to:)](nsobject-swift.class/imagebrowser%28__moveitemsat_to_%29.md): Signals that the specified items should be moved to the specified destination.
- [imageBrowser(\_:removeItemsAt:)](nsobject-swift.class/imagebrowser%28__removeitemsat_%29.md): Signals that a remove operation should be applied to the specified items.
- [imageBrowser(\_:writeItemsAt:to:)](nsobject-swift.class/imagebrowser%28__writeitemsat_to_%29.md): Signals that a drag should begin.
- [imageBrowserSelectionDidChange(\_:)](nsobject-swift.class/imagebrowserselectiondidchange%28__%29.md): Performs custom tasks when the selection changes.
- [imageRepresentation()](nsobject-swift.class/imagerepresentation%28%29.md): Returns the image to display.
- [imageRepresentationType()](nsobject-swift.class/imagerepresentationtype%28%29.md): Returns the representation type of the image to display.
- [imageSubtitle()](nsobject-swift.class/imagesubtitle%28%29.md): Returns the display subtitle of the image.
- [imageTitle()](nsobject-swift.class/imagetitle%28%29.md): Returns the display title of the image.
- [imageUID()](nsobject-swift.class/imageuid%28%29.md): Returns a unique string that identifies the data source item.
- [imageVersion()](nsobject-swift.class/imageversion%28%29.md): Returns the version of the item.
- [index(ofAccessibilityElement:)](nsobject-swift.class/index%28ofaccessibilityelement_%29.md)
- [indicesOfObjects(byEvaluatingObjectSpecifier:)](nsobject-swift.class/indicesofobjects%28byevaluatingobjectspecifier_%29.md): Returns the indices of the specified container objects.
- [inputText(\_:client:)](nsobject-swift.class/inputtext%28__client_%29.md): Handles key down events that do not map to an action method.
- [inputText(\_:key:modifiers:client:)](nsobject-swift.class/inputtext%28__key_modifiers_client_%29.md): Receives Unicode, the key code that generated it, and any modifier flags.
- [isCaseInsensitiveLike(\_:)](nsobject-swift.class/iscaseinsensitivelike%28__%29.md): Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.
- [isEqual(to:)](nsobject-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is equal to another given object.
- [isGreaterThan(\_:)](nsobject-swift.class/isgreaterthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is greater than another given object.
- [isGreaterThanOrEqual(to:)](nsobject-swift.class/isgreaterthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is greater than or equal to another given object.
- [isLessThan(\_:)](nsobject-swift.class/islessthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is less than another given object.
- [isLessThanOrEqual(to:)](nsobject-swift.class/islessthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.
- [isLike(\_:)](nsobject-swift.class/islike%28__%29.md): Returns a Boolean value that indicates whether the receiver is “like” another given object.
- [isNotEqual(to:)](nsobject-swift.class/isnotequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is not equal to another given object.
- [numberOfGroups(inImageBrowser:)](nsobject-swift.class/numberofgroups%28inimagebrowser_%29.md): Returns the number of groups in an image browser view.
- [numberOfItems(inImageBrowser:)](nsobject-swift.class/numberofitems%28inimagebrowser_%29.md): Returns the number of records managed by the data source object.
- [originalString(\_:)](nsobject-swift.class/originalstring%28__%29.md): Return the string that consists of the precomposed Unicode characters.
- [performAction(for:identifier:)](nsobject-swift.class/performaction%28for_identifier_%29.md): Sent to the delegate to perform the action.
- [prepareForInterfaceBuilder()](nsobject-swift.class/prepareforinterfacebuilder%28%29.md): Deprecated. Called when a designable object is created in Interface Builder.
- [provideImage(to:commandBuffer:originx:originy:width:height:userInfo:)](nsobject-swift.class/provideimage%28to_commandbuffer_originx_originy_width_height_userinfo_%29.md): An optional method that an image provider object may implement. With this method, the provider object can use the Metal API to provide pixel data into a MTLTexture when the image object is rendered.
- [provideImageData(\_:bytesPerRow:origin:\_:size:\_:userInfo:)](nsobject-swift.class/provideimagedata%28__bytesperrow_origin___size___userinfo_%29.md): Supplies data to a `CIImage` object.
- [quartzFilterManager(\_:didAdd:)](nsobject-swift.class/quartzfiltermanager%28__didadd_%29.md)
- [quartzFilterManager(\_:didModifyFilter:)](nsobject-swift.class/quartzfiltermanager%28__didmodifyfilter_%29.md)
- [quartzFilterManager(\_:didRemove:)](nsobject-swift.class/quartzfiltermanager%28__didremove_%29.md)
- [quartzFilterManager(\_:didSelect:)](nsobject-swift.class/quartzfiltermanager%28__didselect_%29.md)
- [readLinkQuality(forDeviceComplete:device:info:error:)](nsobject-swift.class/readlinkquality%28fordevicecomplete_device_info_error_%29.md)
- [readRSSI(forDeviceComplete:device:info:error:)](nsobject-swift.class/readrssi%28fordevicecomplete_device_info_error_%29.md)
- [saveOptions(\_:shouldShowUTType:)](nsobject-swift.class/saveoptions%28__shouldshowuttype_%29.md): Called to determine if the specified uniform type identifier should be shown in the save panel.
- [setSharedObservers(\_:)](nsobject-swift.class/setsharedobservers%28__%29.md)
- [setupPanel(\_:determineBestDeviceOfA:orB:)](nsobject-swift.class/setuppanel%28__determinebestdeviceofa_orb_%29.md): Allows the delegate to specify which device is its preferred.
- [setupPanel(\_:deviceContainsSuitableMedia:promptString:)](nsobject-swift.class/setuppanel%28__devicecontainssuitablemedia_promptstring_%29.md): This delegate method allows the delegate to determine if the media inserted in the device is suitable for whatever operation is to be performed.
- [setupPanel(\_:deviceCouldBeTarget:)](nsobject-swift.class/setuppanel%28__devicecouldbetarget_%29.md): Allows the delegate to determine if device can be used as a target.
- [setupPanelDeviceSelectionChanged(\_:)](nsobject-swift.class/setuppaneldeviceselectionchanged%28__%29.md): Sent by the default notification center when the device selection in the panel has changed.
- [setupPanelShouldHandleMediaReservations(\_:)](nsobject-swift.class/setuppanelshouldhandlemediareservations%28__%29.md): This delegate method allows the delegate to control how media reservations are handled.
- [shouldEnableAction(for:identifier:)](nsobject-swift.class/shouldenableaction%28for_identifier_%29.md): Sent to the delegate to determine whether the action should be enabled.
- [title(for:identifier:)](nsobject-swift.class/title%28for_identifier_%29.md): Sent to the delegate to request the title of the menu item for the action.
- [workflowController(\_:didError:)](nsobject-swift.class/workflowcontroller%28__diderror_%29.md): Deprecated.
- [workflowController(\_:didRun:)](nsobject-swift.class/workflowcontroller%28__didrun_%29.md): Deprecated.
- [workflowController(\_:willRun:)](nsobject-swift.class/workflowcontroller%28__willrun_%29.md): Deprecated.
- [workflowControllerDidRun(\_:)](nsobject-swift.class/workflowcontrollerdidrun%28__%29.md): Deprecated.
- [workflowControllerDidStop(\_:)](nsobject-swift.class/workflowcontrollerdidstop%28__%29.md): Deprecated.
- [workflowControllerWillRun(\_:)](nsobject-swift.class/workflowcontrollerwillrun%28__%29.md): Deprecated.
- [workflowControllerWillStop(\_:)](nsobject-swift.class/workflowcontrollerwillstop%28__%29.md): Deprecated.

### Type Methods

- [debugDescription()](nsobject-swift.class/debugdescription%28%29.md)
- [hash()](nsobject-swift.class/hash%28%29.md)

### Default Implementations

- [Equatable Implementations](nsobject-swift.class/equatable-implementations.md)
- [Hashable Implementations](nsobject-swift.class/hashable-implementations.md)

## Relationships

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](nsobjectprotocol.md)

## See Also

### Classes

- [Protocol](protocol.md)

# NSObject (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.

## Declaration

```objectivec
@interface NSObject
```

## Topics

### Initializing a Class

- [initialize](nsobject-swift.class/initialize%28%29.md): Initializes the class before it receives its first message.
- [load](nsobject-swift.class/load%28%29.md): Invoked whenever a class or category is added to the Objective-C runtime; implement this method to perform class-specific behavior upon loading.

### Creating, Copying, and Deallocating Objects

- [alloc](nsobject-swift.class/alloc.md): Returns a new instance of the receiving class.
- [allocWithZone:](nsobject-swift.class/allocwithzone_.md): Returns a new instance of the receiving class.
- [init](nsobject-swift.class/init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy](nsobject-swift.class/copy%28%29.md): Returns the object returned by `copy(with:)`.
- [copyWithZone:](nsobject-swift.class/copywithzone_.md): Returns the receiver.
- [mutableCopy](nsobject-swift.class/mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.
- [mutableCopyWithZone:](nsobject-swift.class/mutablecopywithzone_.md): Returns the receiver.
- [dealloc](nsobject-swift.class/dealloc.md): Deallocates the memory occupied by the receiver.
- [new](nsobject-swift.class/new.md): Allocates a new instance of the receiving class, sends it an [init](nsobject-swift.class/init%28%29.md) message, and returns the initialized object.

### Identifying Classes

- [class](nsobject-swift.class/class.md): Returns the class object.
- [superclass](nsobject-swift.class/superclass%28%29.md): Returns the class object for the receiver’s superclass.
- [isSubclassOfClass:](nsobject-swift.class/issubclass%28of_%29.md): Returns a Boolean value that indicates whether the receiving class is a subclass of, or identical to, a given class.

### Testing Class Functionality

- [instancesRespondToSelector:](nsobject-swift.class/instancesrespond%28to_%29.md): Returns a Boolean value that indicates whether instances of the receiver are capable of responding to a given selector.

### Testing Protocol Conformance

- [conformsToProtocol:](nsobject-swift.class/conforms%28to_%29.md): Returns a Boolean value that indicates whether the target conforms to a given protocol.

### Obtaining Information About Methods

- [methodForSelector:](nsobject-swift.class/method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.
- [instanceMethodForSelector:](nsobject-swift.class/instancemethod%28for_%29.md): Locates and returns the address of the implementation of the instance method identified by a given selector.
- [instanceMethodSignatureForSelector:](nsobject-swift.class/instancemethodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the instance method identified by a given selector.
- [methodSignatureForSelector:](nsobject-swift.class/methodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the method identified by a given selector.

### Describing Objects

- [description](nsobject-swift.class/description%28%29.md): Returns a string that represents the contents of the receiving class.

### Supporting Discardable Content

- [autoContentAccessingProxy](nsobject-swift.class/autocontentaccessingproxy.md): A proxy for the receiving object

### Sending Messages

- [performSelector:withObject:afterDelay:](nsobject-swift.class/perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector:withObject:afterDelay:inModes:](nsobject-swift.class/perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelectorOnMainThread:withObject:waitUntilDone:modes:](nsobject-swift.class/performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [performSelector:onThread:withObject:waitUntilDone:](nsobject-swift.class/perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:modes:](nsobject-swift.class/perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelectorInBackground:withObject:](nsobject-swift.class/performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequestsWithTarget:](nsobject-swift.class/cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](nsobject-swift.class/perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](nsobject-swift.class/cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](nsobject-swift.class/perform%28__with_afterdelay_%29.md).

### Forwarding Messages

- [forwardingTargetForSelector:](nsobject-swift.class/forwardingtarget%28for_%29.md): Returns the object to which unrecognized messages should first be directed.
- [forwardInvocation:](nsobject-swift.class/forwardinvocation_.md): Overridden by subclasses to forward messages to other objects.

### Dynamically Resolving Methods

- [resolveClassMethod:](nsobject-swift.class/resolveclassmethod%28__%29.md): Dynamically provides an implementation for a given selector for a class method.
- [resolveInstanceMethod:](nsobject-swift.class/resolveinstancemethod%28__%29.md): Dynamically provides an implementation for a given selector for an instance method.

### Handling Errors

- [doesNotRecognizeSelector:](nsobject-swift.class/doesnotrecognizeselector%28__%29.md): Handles messages the receiver doesn’t recognize.

### Archiving

- [awakeAfterUsingCoder:](nsobject-swift.class/awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](nsobject-swift.class/classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](nsobject-swift.class/classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](nsobject-swift.class/classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver](nsobject-swift.class/classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver](nsobject-swift.class/classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [classForPortCoder](nsobject-swift.class/classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](nsobject-swift.class/replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](nsobject-swift.class/replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](nsobject-swift.class/replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](nsobject-swift.class/setversion%28__%29.md): Sets the receiver’s version number.
- [version](nsobject-swift.class/version%28%29.md): Returns the version number assigned to the class.

### Working with Class Descriptions

- [attributeKeys](nsobject-swift.class/attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](nsobject-swift.class/classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverseForRelationshipKey:](nsobject-swift.class/inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](nsobject-swift.class/tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](nsobject-swift.class/toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.

### Improving Accessibility

- [UIAccessibility](../uikit/uiaccessibility-protocol.md): A set of methods that provides accessibility information about views and controls in an app’s user interface.
- [UIAccessibilityContainer](../uikit/uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [UIAccessibilityAction](uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityFocus](uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityDragging](uiaccessibilitydragging.md): A pair of properties to allow you to fine-tune how drags and drops are exposed to assistive technologies.

### Improving browser accessibility

- [browserAccessibilityAttributedValueInRange:](nsobject-swift.class/browseraccessibilityattributedvalue%28in_%29.md): Returns the value for this element within the given range, as an attributed string.
- [browserAccessibilityDeleteTextAtCursor:](nsobject-swift.class/browseraccessibilitydeletetextatcursor%28numberofcharacters_%29.md): Deletes text from the element at the current cursor position.
- [browserAccessibilityInsertTextAtCursor:](nsobject-swift.class/browseraccessibilityinserttextatcursor%28text_%29.md): Inserts text into the element at the current cursor position.
- [browserAccessibilitySelectedTextRange](nsobject-swift.class/browseraccessibilityselectedtextrange%28%29.md): Returns the range of selected text in the element.
- [browserAccessibilitySetSelectedTextRange:](nsobject-swift.class/browseraccessibilitysetselectedtextrange%28__%29.md): Updates the element’s selected text.
- [browserAccessibilityValueInRange:](nsobject-swift.class/browseraccessibilityvalue%28in_%29.md): Returns this element’s value in the given range.
- [browserAccessibilityContainerType](nsobject-swift.class/browseraccessibilitycontainertype.md): The kind of container that contains this element.
- [browserAccessibilityCurrentStatus](nsobject-swift.class/browseraccessibilitycurrentstatus.md): A string that’s the element’s value for aria-current.
- [browserAccessibilityHasDOMFocus](nsobject-swift.class/browseraccessibilityhasdomfocus.md): A Boolean value that indicates whether the element has native focus in the browser Document Object Model.
- [browserAccessibilityIsRequired](nsobject-swift.class/browseraccessibilityisrequired.md): A Boolean value that’s the element’s value for aria-required.
- [browserAccessibilityPressedState](nsobject-swift.class/browseraccessibilitypressedstate.md): The element’s value for aria-pressed.
- [browserAccessibilityRoleDescription](nsobject-swift.class/browseraccessibilityroledescription.md): A string that describes the element’s role for assistive technologies.
- [browserAccessibilitySortDirection](nsobject-swift.class/browseraccessibilitysortdirection.md): A string that’s the element’s value for aria-sort.

### Scripting

- [classCode](nsobject-swift.class/classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](nsobject-swift.class/classname.md): A string containing the name of the class.
- [copyScriptingValue:forKey:withProperties:](nsobject-swift.class/copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObjectOfClass:forValueForKey:withContentsValue:properties:](nsobject-swift.class/newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](nsobject-swift.class/scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.
- [scriptingValueForSpecifier:](nsobject-swift.class/scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.

### Key-Value Observing

- [NSKeyValueObserving](nskeyvalueobserving.md): An informal protocol that objects adopt to be notified of changes to the specified properties of other objects.

### Key-Value Coding

- [NSKeyValueBindingCreation](nskeyvaluebindingcreation.md): A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.
- [NSKeyValueCoding](nskeyvaluecoding.md): A mechanism by which you can access the properties of an object indirectly by name or key.
- [NSScriptKeyValueCoding](nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptKeyValueCoding Exception Names](nsscriptkeyvaluecoding-exception-names.md): Exceptions raised by key-value coding methods.

### Interacting with Web Plug-ins

- [WebPlugInContainer](webplugincontainer.md): `WebPlugInContainer` is an informal protocol that enables a plug-in to send messages to the application.
- [WebPlugIn](webplugin.md): The `WebPlugIn` informal protocol defines methods that enable interaction between an application using the WebKit framework and any WebKit-based plug-ins it may use.

### Implementing Web Scripting

- [WebScripting](webscripting.md): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.

### Supporting Cocoa Scripting

- [NSScriptingComparisonMethods](nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.

### Customizing accessibility

- [accessibilityElements](nsobject-swift.class/accessibilityelements.md): An array of features of an object that assistive technologies can access.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](deprecated-symbols.md): Review symbols that are no longer supported and find the replacements to use instead.

### Instance Variables

- [isa](nsobject-swift.class/isa.md): Deprecated.

### Instance Properties

- [accessibilityActivateBlock](nsobject-swift.class/accessibilityactivateblock.md)
- [accessibilityActivationPoint](nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityActivationPointBlock](nsobject-swift.class/accessibilityactivationpointblock.md)
- [accessibilityAttributedHint](nsobject-swift.class/accessibilityattributedhint.md)
- [accessibilityAttributedHintBlock](nsobject-swift.class/accessibilityattributedhintblock.md)
- [accessibilityAttributedLabel](nsobject-swift.class/accessibilityattributedlabel.md)
- [accessibilityAttributedLabelBlock](nsobject-swift.class/accessibilityattributedlabelblock.md)
- [accessibilityAttributedUserInputLabels](nsobject-swift.class/accessibilityattributeduserinputlabels.md)
- [accessibilityAttributedUserInputLabelsBlock](nsobject-swift.class/accessibilityattributeduserinputlabelsblock.md)
- [accessibilityAttributedValue](nsobject-swift.class/accessibilityattributedvalue.md)
- [accessibilityAttributedValueBlock](nsobject-swift.class/accessibilityattributedvalueblock.md)
- [accessibilityContainerType](nsobject-swift.class/accessibilitycontainertype.md)
- [accessibilityContainerTypeBlock](nsobject-swift.class/accessibilitycontainertypeblock.md)
- [accessibilityCustomActionsBlock](nsobject-swift.class/accessibilitycustomactionsblock.md)
- [accessibilityCustomRotors](nsobject-swift.class/accessibilitycustomrotors.md)
- [accessibilityCustomRotorsBlock](nsobject-swift.class/accessibilitycustomrotorsblock.md)
- [accessibilityDecrementBlock](nsobject-swift.class/accessibilitydecrementblock.md)
- [accessibilityDirectTouchOptions](nsobject-swift.class/accessibilitydirecttouchoptions.md)
- [accessibilityElementsBlock](nsobject-swift.class/accessibilityelementsblock.md)
- [accessibilityElementsHidden](nsobject-swift.class/accessibilityelementshidden.md)
- [accessibilityElementsHiddenBlock](nsobject-swift.class/accessibilityelementshiddenblock.md)
- [accessibilityExpandedStatus](nsobject-swift.class/accessibilityexpandedstatus.md)
- [accessibilityExpandedStatusBlock](nsobject-swift.class/accessibilityexpandedstatusblock.md)
- [accessibilityFocusedUIElement](nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](nsobject-swift.class/accessibilityframe.md)
- [accessibilityFrameBlock](nsobject-swift.class/accessibilityframeblock.md)
- [accessibilityHeaderElements](nsobject-swift.class/accessibilityheaderelements.md)
- [accessibilityHeaderElementsBlock](nsobject-swift.class/accessibilityheaderelementsblock.md)
- [accessibilityHint](nsobject-swift.class/accessibilityhint.md)
- [accessibilityHintBlock](nsobject-swift.class/accessibilityhintblock.md)
- [accessibilityIdentifierBlock](nsobject-swift.class/accessibilityidentifierblock.md)
- [accessibilityIncrementBlock](nsobject-swift.class/accessibilityincrementblock.md)
- [accessibilityLabel](nsobject-swift.class/accessibilitylabel.md)
- [accessibilityLabelBlock](nsobject-swift.class/accessibilitylabelblock.md)
- [accessibilityLanguage](nsobject-swift.class/accessibilitylanguage.md)
- [accessibilityLanguageBlock](nsobject-swift.class/accessibilitylanguageblock.md)
- [accessibilityMagicTapBlock](nsobject-swift.class/accessibilitymagictapblock.md)
- [accessibilityNavigationStyle](nsobject-swift.class/accessibilitynavigationstyle.md)
- [accessibilityNavigationStyleBlock](nsobject-swift.class/accessibilitynavigationstyleblock.md)
- [accessibilityNextTextNavigationElement](nsobject-swift.class/accessibilitynexttextnavigationelement.md): An accessibility element that contains text that semantically follows this element’s text.
- [accessibilityNextTextNavigationElementBlock](nsobject-swift.class/accessibilitynexttextnavigationelementblock.md)
- [accessibilityNotifiesWhenDestroyed](nsobject-swift.class/accessibilitynotifieswhendestroyed.md): A Boolean value that indicates whether a custom accessibility object sends a notification when its corresponding UI element is destroyed.
- [accessibilityPath](nsobject-swift.class/accessibilitypath.md)
- [accessibilityPathBlock](nsobject-swift.class/accessibilitypathblock.md)
- [accessibilityPerformEscapeBlock](nsobject-swift.class/accessibilityperformescapeblock.md)
- [accessibilityPreviousTextNavigationElement](nsobject-swift.class/accessibilityprevioustextnavigationelement.md): An accessibility element that contains text that is semantically previous to this element’s text.
- [accessibilityPreviousTextNavigationElementBlock](nsobject-swift.class/accessibilityprevioustextnavigationelementblock.md)
- [accessibilityRespondsToUserInteraction](nsobject-swift.class/accessibilityrespondstouserinteraction.md)
- [accessibilityRespondsToUserInteractionBlock](nsobject-swift.class/accessibilityrespondstouserinteractionblock.md)
- [accessibilityShouldGroupAccessibilityChildrenBlock](nsobject-swift.class/accessibilityshouldgroupaccessibilitychildrenblock.md)
- [accessibilityTextInputResponder](nsobject-swift.class/accessibilitytextinputresponder.md): The object that handles text input calls for this accessibility element.
- [accessibilityTextInputResponderBlock](nsobject-swift.class/accessibilitytextinputresponderblock.md): The block to use to handle text input calls to a backing view.
- [accessibilityTextualContext](nsobject-swift.class/accessibilitytextualcontext.md)
- [accessibilityTextualContextBlock](nsobject-swift.class/accessibilitytextualcontextblock.md)
- [accessibilityTraits](nsobject-swift.class/accessibilitytraits.md)
- [accessibilityTraitsBlock](nsobject-swift.class/accessibilitytraitsblock.md)
- [accessibilityUserInputLabels](nsobject-swift.class/accessibilityuserinputlabels.md)
- [accessibilityUserInputLabelsBlock](nsobject-swift.class/accessibilityuserinputlabelsblock.md)
- [accessibilityValue](nsobject-swift.class/accessibilityvalue.md)
- [accessibilityValueBlock](nsobject-swift.class/accessibilityvalueblock.md)
- [accessibilityViewIsModal](nsobject-swift.class/accessibilityviewismodal.md)
- [accessibilityViewIsModalBlock](nsobject-swift.class/accessibilityviewismodalblock.md)
- [automationElements](nsobject-swift.class/automationelements.md)
- [automationElementsBlock](nsobject-swift.class/automationelementsblock.md)
- [browserAccessibilityDetailsElements](nsobject-swift.class/browseraccessibilitydetailselements.md)
- [browserAccessibilityKeyboardShortcuts](nsobject-swift.class/browseraccessibilitykeyboardshortcuts.md)
- [browserAccessibilityOrientation](nsobject-swift.class/browseraccessibilityorientation.md)
- [isAccessibilityElement](nsobject-swift.class/isaccessibilityelement.md)
- [isAccessibilityElementBlock](nsobject-swift.class/isaccessibilityelementblock.md)
- [selectable](nsobject-swift.class/isselectable.md)
- [objectSpecifier](nsobject-swift.class/objectspecifier.md): Returns an object specifier for the receiver.
- [shouldGroupAccessibilityChildren](nsobject-swift.class/shouldgroupaccessibilitychildren.md)

### Instance Methods

- [URL:resourceDataDidBecomeAvailable:](nsobject-swift.class/url_resourcedatadidbecomeavailable_.md): Deprecated.
- [URL:resourceDidFailLoadingWithReason:](nsobject-swift.class/url_resourcedidfailloadingwithreason_.md): Deprecated.
- [URLResourceDidCancelLoading:](nsobject-swift.class/urlresourcedidcancelloading_.md): Deprecated.
- [URLResourceDidFinishLoading:](nsobject-swift.class/urlresourcedidfinishloading_.md): Deprecated.
- [acceptsPreviewPanelControl:](nsobject-swift.class/acceptspreviewpanelcontrol%28__%29.md)
- [accessibilityElementAtIndex:](nsobject-swift.class/accessibilityelement%28at_%29.md)
- [accessibilityElementCount](nsobject-swift.class/accessibilityelementcount%28%29.md)
- [accessibilityHitTest:](nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityHitTest:withEvent:](nsobject-swift.class/accessibilityhittest%28__event_%29.md)
- [accessibilityLineEndPositionFromCurrentSelection](nsobject-swift.class/accessibilitylineendpositionfromcurrentselection%28%29.md)
- [accessibilityLineRangeForPosition:](nsobject-swift.class/accessibilitylinerange%28forposition_%29.md)
- [accessibilityLineStartPositionFromCurrentSelection](nsobject-swift.class/accessibilitylinestartpositionfromcurrentselection%28%29.md)
- [accessibilityZoomInAtPoint:](nsobject-swift.class/accessibilityzoomin%28at_%29.md): Zooms in on the content at the specified point.
- [accessibilityZoomOutAtPoint:](nsobject-swift.class/accessibilityzoomout%28at_%29.md): Zooms out from the content at the specified point.
- [actionProperty](nsobject-swift.class/actionproperty%28%29.md): Sent to the delegate to request the property the action applies to.
- [application:delegateHandlesKey:](nsobject-swift.class/application_delegatehandleskey_.md): Deprecated. Sent by Cocoa’s built-in scripting support during execution of `get` or `set` script commands to find out if the delegate can handle operations on the specified key-value key.
- [attemptRecoveryFromError:optionIndex:](nsobject-swift.class/attemptrecovery%28fromerror_optionindex_%29.md): Implemented to attempt a recovery from an error noted in an application-modal dialog.
- [attemptRecoveryFromError:optionIndex:delegate:didRecoverSelector:contextInfo:](nsobject-swift.class/attemptrecovery%28fromerror_optionindex_delegate_didrecoverselector_contextinfo_%29.md): Implemented to attempt a recovery from an error noted in a document-modal sheet.
- [attributedStringForIdentityPropertiesWithNames:inRecord:comparisonRecords:firstLineAttributes:secondLineAttributes:](nsobject-swift.class/attributedstringforidentitypropertieswithnames_inrecord_comparisonrecords_firstlineattributes_secondlineattributes_.md): Deprecated.
- [attributedStringForPropertiesWithNames:inRecord:comparisonRecords:defaultAttributes:](nsobject-swift.class/attributedstringforpropertieswithnames_inrecord_comparisonrecords_defaultattributes_.md): Deprecated.
- [authorizationViewCreatedAuthorization:](nsobject-swift.class/authorizationviewcreatedauthorization%28__%29.md): Sent to the delegate to indicate the authorization object has been created or changed.
- [authorizationViewDidAuthorize:](nsobject-swift.class/authorizationviewdidauthorize%28__%29.md): Sent to the delegate to indicate the user was authorized and the authorization view was changed to unlocked.
- [authorizationViewDidDeauthorize:](nsobject-swift.class/authorizationviewdiddeauthorize%28__%29.md): Sent to the delegate to indicate the user was deauthorized and the authorization view was changed to locked.
- [authorizationViewDidHide:](nsobject-swift.class/authorizationviewdidhide%28__%29.md): Sent to the delegate to indicate that the view’s visibility has changed.
- [authorizationViewReleasedAuthorization:](nsobject-swift.class/authorizationviewreleasedauthorization%28__%29.md): Sent to the delegate to indicate that deauthorization is about to occur.
- [authorizationViewShouldDeauthorize:](nsobject-swift.class/authorizationviewshoulddeauthorize%28__%29.md): Sent to the delegate when a user clicks the open lock icon.
- [awakeFromNib](nsobject-swift.class/awakefromnib%28%29.md): Deprecated. Prepares the receiver for service after it has been loaded from an Interface Builder archive, or nib file.
- [beginPreviewPanelControl:](nsobject-swift.class/beginpreviewpanelcontrol%28__%29.md)
- [browserAccessibilityImageData:](nsobject-swift.class/browseraccessibilityimagedata%28__%29.md)
- [browserAccessibilityImageDataSize](nsobject-swift.class/browseraccessibilityimagedatasize-c.method.md)
- [burnProgressPanel:burnDidFinish:](nsobject-swift.class/burnprogresspanel%28__burndidfinish_%29.md): Allows the delegate to handle the end-of-burn feedback.
- [burnProgressPanelDidFinish:](nsobject-swift.class/burnprogresspaneldidfinish%28__%29.md): Notification sent by the panel after ordering out.
- [burnProgressPanelWillBegin:](nsobject-swift.class/burnprogresspanelwillbegin%28__%29.md): Notification sent by the panel before display.
- [candidates:](nsobject-swift.class/candidates%28__%29.md): Returns an array of candidates.
- [certificatePanelShowHelp:](nsobject-swift.class/certificatepanelshowhelp%28__%29.md): Implements custom help behavior for the modal panel.
- [changeColor:](nsobject-swift.class/changecolor_.md): Deprecated. Sent to the first responder when the user selects a color in an `NSColorPanel` object.
- [changeFont:](nsobject-swift.class/changefont_.md): Deprecated. Informs responders of a font change.
- [chooseIdentityPanelShowHelp:](nsobject-swift.class/chooseidentitypanelshowhelp%28__%29.md): Implements custom help behavior for the modal panel.
- [commitComposition:](nsobject-swift.class/commitcomposition%28__%29.md): Informs the controller that the composition should be committed.
- [commitEditing](nsobject-swift.class/commitediting.md): Deprecated. Returns whether the receiver was able to commit any pending edits.
- [commitEditingAndReturnError:](nsobject-swift.class/commiteditingandreturnerror_.md): Deprecated. Attempt to commit pending edits, returning an error in the case of failure.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](nsobject-swift.class/commiteditingwithdelegate_didcommitselector_contextinfo_.md): Deprecated. Attempt to commit any currently edited results of the receiver.
- [composedString:](nsobject-swift.class/composedstring%28__%29.md): Return the current composed string.
- [compositionParameterView:didChangeParameterWithKey:](nsobject-swift.class/compositionparameterview%28__didchangeparameterwithkey_%29.md): Deprecated. Called after an input parameter in the composition parameter view has been edited.
- [compositionParameterView:shouldDisplayParameterWithKey:attributes:](nsobject-swift.class/compositionparameterview%28__shoulddisplayparameterwithkey_attributes_%29.md): Deprecated. Allows you to define which composition parameters are visible in the user interface when the composition parameter view refreshes.
- [compositionPickerView:didSelectComposition:](nsobject-swift.class/compositionpickerview%28__didselect_%29.md): Deprecated. Performs custom tasks when the selected composition in the composition picker view changes.
- [compositionPickerViewDidStartAnimating:](nsobject-swift.class/compositionpickerviewdidstartanimating%28__%29.md): Deprecated. Performs custom tasks when the composition picker view starts animating a composition.
- [compositionPickerViewWillStopAnimating:](nsobject-swift.class/compositionpickerviewwillstopanimating%28__%29.md): Deprecated. Performs custom tasks when the composition picker view stops animating a composition.
- [controlTextDidBeginEditing:](nsobject-swift.class/controltextdidbeginediting_.md): Deprecated. Sent when a control with editable text begins an editing session.
- [controlTextDidChange:](nsobject-swift.class/controltextdidchange_.md): Deprecated. Sent when the text in the receiving control changes.
- [controlTextDidEndEditing:](nsobject-swift.class/controltextdidendediting_.md): Deprecated. Sent when a control with editable text ends an editing session.
- [didCommandBySelector:client:](nsobject-swift.class/didcommand%28by_client_%29.md): Processes a command generated by user action such as typing certain keys or pressing the mouse button.
- [discardEditing](nsobject-swift.class/discardediting.md): Deprecated. Causes the receiver to discard any changes, restoring the previous values.
- [doesContain:](nsobject-swift.class/doescontain%28__%29.md): Returns a Boolean value that indicates whether the receiver contains a given object.
- [draggedImage:beganAt:](nsobject-swift.class/draggedimage_beganat_.md): Deprecated.
- [draggedImage:endedAt:deposited:](nsobject-swift.class/draggedimage_endedat_deposited_.md): Deprecated.
- [draggedImage:endedAt:operation:](nsobject-swift.class/draggedimage_endedat_operation_.md): Deprecated.
- [draggedImage:movedTo:](nsobject-swift.class/draggedimage_movedto_.md): Deprecated.
- [draggingSourceOperationMaskForLocal:](nsobject-swift.class/draggingsourceoperationmaskforlocal_.md): Deprecated.
- [endPreviewPanelControl:](nsobject-swift.class/endpreviewpanelcontrol%28__%29.md)
- [eraseProgressPanel:eraseDidFinish:](nsobject-swift.class/eraseprogresspanel%28__erasedidfinish_%29.md): Notification sent by the panel before display.
- [eraseProgressPanelDidFinish:](nsobject-swift.class/eraseprogresspaneldidfinish%28__%29.md): Notification sent by the panel after ordering out.
- [eraseProgressPanelWillBegin:](nsobject-swift.class/eraseprogresspanelwillbegin%28__%29.md): Notification sent by the panel before display.
- [exceptionHandler:shouldHandleException:mask:](nsobject-swift.class/exceptionhandler%28__shouldhandle_mask_%29.md): Implemented by the delegate to evaluate whether the delegating exception handler should handle a given exception.
- [exceptionHandler:shouldLogException:mask:](nsobject-swift.class/exceptionhandler%28__shouldlogexception_mask_%29.md): Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.
- [fileTransferServicesAbortComplete:error:](nsobject-swift.class/filetransferservicesabortcomplete%28__error_%29.md)
- [fileTransferServicesConnectionComplete:error:](nsobject-swift.class/filetransferservicesconnectioncomplete%28__error_%29.md)
- [fileTransferServicesCopyRemoteFileComplete:error:](nsobject-swift.class/filetransferservicescopyremotefilecomplete%28__error_%29.md)
- [fileTransferServicesCopyRemoteFileProgress:transferProgress:](nsobject-swift.class/filetransferservicescopyremotefileprogress%28__transferprogress_%29.md)
- [fileTransferServicesCreateFolderComplete:error:folder:](nsobject-swift.class/filetransferservicescreatefoldercomplete%28__error_folder_%29.md)
- [fileTransferServicesDisconnectionComplete:error:](nsobject-swift.class/filetransferservicesdisconnectioncomplete%28__error_%29.md)
- [fileTransferServicesFilePreparationComplete:error:](nsobject-swift.class/filetransferservicesfilepreparationcomplete%28__error_%29.md)
- [fileTransferServicesPathChangeComplete:error:finalPath:](nsobject-swift.class/filetransferservicespathchangecomplete%28__error_finalpath_%29.md)
- [fileTransferServicesRemoveItemComplete:error:removedItem:](nsobject-swift.class/filetransferservicesremoveitemcomplete%28__error_removeditem_%29.md)
- [fileTransferServicesRetrieveFolderListingComplete:error:listing:](nsobject-swift.class/filetransferservicesretrievefolderlistingcomplete%28__error_listing_%29.md)
- [fileTransferServicesSendFileComplete:error:](nsobject-swift.class/filetransferservicessendfilecomplete%28__error_%29.md)
- [fileTransferServicesSendFileProgress:transferProgress:](nsobject-swift.class/filetransferservicessendfileprogress%28__transferprogress_%29.md)
- [getL2CAPChannelRef](nsobject-swift.class/getl2capchannelref.md): Deprecated.
- [getOpenGLBufferContext:pixelFormat:](nsobject-swift.class/getopenglbuffercontext_pixelformat_.md): Deprecated.
- [getPixelBufferPixelFormat:](nsobject-swift.class/getpixelbufferpixelformat_.md): Deprecated.
- [handleEvent:client:](nsobject-swift.class/handle%28__client_%29.md): Handles key down and mouse events.
- [ignoreModifierKeysWhileDragging](nsobject-swift.class/ignoremodifierkeyswhiledragging.md): Deprecated.
- [imageBrowser:backgroundWasRightClickedWithEvent:](nsobject-swift.class/imagebrowser%28__backgroundwasrightclickedwith_%29.md): Performs custom tasks when the user right-clicks the image browser view background.
- [imageBrowser:cellWasDoubleClickedAtIndex:](nsobject-swift.class/imagebrowser%28__cellwasdoubleclickedat_%29.md): Performs custom tasks when the user double-clicks an item in the image browser view.
- [imageBrowser:cellWasRightClickedAtIndex:withEvent:](nsobject-swift.class/imagebrowser%28__cellwasrightclickedat_with_%29.md): Performs custom tasks when the user right-clicks an item in the image browser view.
- [imageBrowser:groupAtIndex:](nsobject-swift.class/imagebrowser%28__groupat_%29.md): Returns the group at the specified index.
- [imageBrowser:itemAtIndex:](nsobject-swift.class/imagebrowser%28__itemat_%29.md): Returns an object for the item in an image browser view that corresponds to the specified index.
- [imageBrowser:moveItemsAtIndexes:toIndex:](nsobject-swift.class/imagebrowser%28__moveitemsat_to_%29.md): Signals that the specified items should be moved to the specified destination.
- [imageBrowser:removeItemsAtIndexes:](nsobject-swift.class/imagebrowser%28__removeitemsat_%29.md): Signals that a remove operation should be applied to the specified items.
- [imageBrowser:writeItemsAtIndexes:toPasteboard:](nsobject-swift.class/imagebrowser%28__writeitemsat_to_%29.md): Signals that a drag should begin.
- [imageBrowserSelectionDidChange:](nsobject-swift.class/imagebrowserselectiondidchange%28__%29.md): Performs custom tasks when the selection changes.
- [imageRepresentation](nsobject-swift.class/imagerepresentation%28%29.md): Returns the image to display.
- [imageRepresentationType](nsobject-swift.class/imagerepresentationtype%28%29.md): Returns the representation type of the image to display.
- [imageSubtitle](nsobject-swift.class/imagesubtitle%28%29.md): Returns the display subtitle of the image.
- [imageTitle](nsobject-swift.class/imagetitle%28%29.md): Returns the display title of the image.
- [imageUID](nsobject-swift.class/imageuid%28%29.md): Returns a unique string that identifies the data source item.
- [imageVersion](nsobject-swift.class/imageversion%28%29.md): Returns the version of the item.
- [indexOfAccessibilityElement:](nsobject-swift.class/index%28ofaccessibilityelement_%29.md)
- [indicesOfObjectsByEvaluatingObjectSpecifier:](nsobject-swift.class/indicesofobjects%28byevaluatingobjectspecifier_%29.md): Returns the indices of the specified container objects.
- [inputText:client:](nsobject-swift.class/inputtext%28__client_%29.md): Handles key down events that do not map to an action method.
- [inputText:key:modifiers:client:](nsobject-swift.class/inputtext%28__key_modifiers_client_%29.md): Receives Unicode, the key code that generated it, and any modifier flags.
- [isCaseInsensitiveLike:](nsobject-swift.class/iscaseinsensitivelike%28__%29.md): Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.
- [isEqualTo:](nsobject-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is equal to another given object.
- [isGreaterThan:](nsobject-swift.class/isgreaterthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is greater than another given object.
- [isGreaterThanOrEqualTo:](nsobject-swift.class/isgreaterthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is greater than or equal to another given object.
- [isLessThan:](nsobject-swift.class/islessthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is less than another given object.
- [isLessThanOrEqualTo:](nsobject-swift.class/islessthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.
- [isLike:](nsobject-swift.class/islike%28__%29.md): Returns a Boolean value that indicates whether the receiver is “like” another given object.
- [isNotEqualTo:](nsobject-swift.class/isnotequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is not equal to another given object.
- [layer:shouldInheritContentsScale:fromWindow:](nsobject-swift.class/layer_shouldinheritcontentsscale_fromwindow_.md): Deprecated. Invoked when a resolution changes occurs for the window that hosts the layer.
- [numberOfGroupsInImageBrowser:](nsobject-swift.class/numberofgroups%28inimagebrowser_%29.md): Returns the number of groups in an image browser view.
- [numberOfItemsInImageBrowser:](nsobject-swift.class/numberofitems%28inimagebrowser_%29.md): Returns the number of records managed by the data source object.
- [objectDidBeginEditing:](nsobject-swift.class/objectdidbeginediting_.md): Deprecated. This message should be sent to the receiver when `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing:](nsobject-swift.class/objectdidendediting_.md): Deprecated. This message should be sent to the receiver when `editor` has finished editing a property belonging to the receiver.
- [originalString:](nsobject-swift.class/originalstring%28__%29.md): Return the string that consists of the precomposed Unicode characters.
- [panel:compareFilename:with:caseSensitive:](nsobject-swift.class/panel_comparefilename_with_casesensitive_.md): Deprecated. Controls the ordering of files presented by the `NSSavePanel` object specified.
- [panel:directoryDidChange:](nsobject-swift.class/panel_directorydidchange_.md): Deprecated. Tells the delegate that the user has changed the selected directory in the `NSSavePanel` object specified.
- [panel:isValidFilename:](nsobject-swift.class/panel_isvalidfilename_.md): Deprecated. Gives the delegate the opportunity to validate selected items.
- [panel:shouldShowFilename:](nsobject-swift.class/panel_shouldshowfilename_.md): Deprecated. Gives the delegate the opportunity to filter items that it doesn’t want the user to choose.
- [pasteboard:provideDataForType:](nsobject-swift.class/pasteboard_providedatafortype_.md): Deprecated. Implemented by an owner object to provide promised data.
- [pasteboardChangedOwner:](nsobject-swift.class/pasteboardchangedowner_.md): Deprecated. Notifies a prior owner of the specified pasteboard (and owners of representations on the pasteboard) that the pasteboard has changed owners.
- [performActionForPerson:identifier:](nsobject-swift.class/performaction%28for_identifier_%29.md): Sent to the delegate to perform the action.
- [prepareForInterfaceBuilder](nsobject-swift.class/prepareforinterfacebuilder%28%29.md): Deprecated. Called when a designable object is created in Interface Builder.
- [provideImageToMTLTexture:commandBuffer:originx:originy:width:height:userInfo:](nsobject-swift.class/provideimage%28to_commandbuffer_originx_originy_width_height_userinfo_%29.md): An optional method that an image provider object may implement. With this method, the provider object can use the Metal API to provide pixel data into a MTLTexture when the image object is rendered.
- [provideImageData:bytesPerRow:origin::size::userInfo:](nsobject-swift.class/provideimagedata%28__bytesperrow_origin___size___userinfo_%29.md): Supplies data to a `CIImage` object.
- [quartzFilterManager:didAddFilter:](nsobject-swift.class/quartzfiltermanager%28__didadd_%29.md)
- [quartzFilterManager:didModifyFilter:](nsobject-swift.class/quartzfiltermanager%28__didmodifyfilter_%29.md)
- [quartzFilterManager:didRemoveFilter:](nsobject-swift.class/quartzfiltermanager%28__didremove_%29.md)
- [quartzFilterManager:didSelectFilter:](nsobject-swift.class/quartzfiltermanager%28__didselect_%29.md)
- [readLinkQualityForDeviceComplete:device:info:error:](nsobject-swift.class/readlinkquality%28fordevicecomplete_device_info_error_%29.md)
- [readRSSIForDeviceComplete:device:info:error:](nsobject-swift.class/readrssi%28fordevicecomplete_device_info_error_%29.md)
- [registerIncomingDataListener:refCon:](nsobject-swift.class/registerincomingdatalistener_refcon_.md): Deprecated.
- [renderIntoOpenGLBuffer:onScreen:forTime:](nsobject-swift.class/renderintoopenglbuffer_onscreen_fortime_.md): Deprecated. Called for each frame to be sent to Messages. This method will not be called on the main thread.
- [renderIntoPixelBuffer:forTime:](nsobject-swift.class/renderintopixelbuffer_fortime_.md): Deprecated.
- [saveOptions:shouldShowUTType:](nsobject-swift.class/saveoptions%28__shouldshowuttype_%29.md): Called to determine if the specified uniform type identifier should be shown in the save panel.
- [sessionDriver:didNegotiateAndReturnError:](nsobject-swift.class/sessiondriver_didnegotiateandreturnerror_.md): Deprecated.
- [sessionDriver:didPullAndReturnError:](nsobject-swift.class/sessiondriver_didpullandreturnerror_.md): Deprecated.
- [sessionDriver:didPushAndReturnError:](nsobject-swift.class/sessiondriver_didpushandreturnerror_.md): Deprecated.
- [sessionDriver:didReceiveSyncAlertAndReturnError:](nsobject-swift.class/sessiondriver_didreceivesyncalertandreturnerror_.md): Deprecated.
- [sessionDriver:didRegisterClientAndReturnError:](nsobject-swift.class/sessiondriver_didregisterclientandreturnerror_.md): Deprecated.
- [sessionDriver:willFinishSessionAndReturnError:](nsobject-swift.class/sessiondriver_willfinishsessionandreturnerror_.md): Deprecated.
- [sessionDriver:willNegotiateAndReturnError:](nsobject-swift.class/sessiondriver_willnegotiateandreturnerror_.md): Deprecated.
- [sessionDriver:willPullAndReturnError:](nsobject-swift.class/sessiondriver_willpullandreturnerror_.md): Deprecated.
- [sessionDriver:willPushAndReturnError:](nsobject-swift.class/sessiondriver_willpushandreturnerror_.md): Deprecated.
- [sessionDriverDidCancelSession:](nsobject-swift.class/sessiondriverdidcancelsession_.md): Deprecated.
- [sessionDriverDidFinishSession:](nsobject-swift.class/sessiondriverdidfinishsession_.md): Deprecated.
- [sessionDriverWillCancelSession:](nsobject-swift.class/sessiondriverwillcancelsession_.md): Deprecated.
- [setSharedObservers:](nsobject-swift.class/setsharedobservers%28__%29.md)
- [setupPanel:determineBestDeviceOfA:orB:](nsobject-swift.class/setuppanel%28__determinebestdeviceofa_orb_%29.md): Allows the delegate to specify which device is its preferred.
- [setupPanel:deviceContainsSuitableMedia:promptString:](nsobject-swift.class/setuppanel%28__devicecontainssuitablemedia_promptstring_%29.md): This delegate method allows the delegate to determine if the media inserted in the device is suitable for whatever operation is to be performed.
- [setupPanel:deviceCouldBeTarget:](nsobject-swift.class/setuppanel%28__devicecouldbetarget_%29.md): Allows the delegate to determine if device can be used as a target.
- [setupPanelDeviceSelectionChanged:](nsobject-swift.class/setuppaneldeviceselectionchanged%28__%29.md): Sent by the default notification center when the device selection in the panel has changed.
- [setupPanelShouldHandleMediaReservations:](nsobject-swift.class/setuppanelshouldhandlemediareservations%28__%29.md): This delegate method allows the delegate to control how media reservations are handled.
- [shouldEnableActionForPerson:identifier:](nsobject-swift.class/shouldenableaction%28for_identifier_%29.md): Sent to the delegate to determine whether the action should be enabled.
- [tableView:writeRows:toPasteboard:](nsobject-swift.class/tableview_writerows_topasteboard_.md): Deprecated. Writes the specified rows to the specified pasteboard.
- [titleForPerson:identifier:](nsobject-swift.class/title%28for_identifier_%29.md): Sent to the delegate to request the title of the menu item for the action.
- [validModesForFontPanel:](nsobject-swift.class/validmodesforfontpanel_.md): Deprecated. Returns the mode mask corresponding to the expected font panel mode.
- [validateMenuItem:](nsobject-swift.class/validatemenuitem_.md): Deprecated. Implemented to override the default action of enabling or disabling a specific menu item.
- [validateToolbarItem:](nsobject-swift.class/validatetoolbaritem_.md): Deprecated. If this method is implemented and returns `false`, NSToolbar will disable `theItem`; returning `true` causes `theItem` to be enabled.
- [view:stringForToolTip:point:userData:](nsobject-swift.class/view_stringfortooltip_point_userdata_.md): Deprecated. Returns the tool tip string to be displayed due to the cursor pausing at location `point` within the tool tip rectangle identified by `tag` in the view `view`.
- [workflowController:didError:](nsobject-swift.class/workflowcontroller%28__diderror_%29.md): Deprecated.
- [workflowController:didRunAction:](nsobject-swift.class/workflowcontroller%28__didrun_%29.md): Deprecated.
- [workflowController:willRunAction:](nsobject-swift.class/workflowcontroller%28__willrun_%29.md): Deprecated.
- [workflowControllerDidRun:](nsobject-swift.class/workflowcontrollerdidrun%28__%29.md): Deprecated.
- [workflowControllerDidStop:](nsobject-swift.class/workflowcontrollerdidstop%28__%29.md): Deprecated.
- [workflowControllerWillRun:](nsobject-swift.class/workflowcontrollerwillrun%28__%29.md): Deprecated.
- [workflowControllerWillStop:](nsobject-swift.class/workflowcontrollerwillstop%28__%29.md): Deprecated.
- [write:length:](nsobject-swift.class/write_length_.md): Deprecated.

### Type Methods

- [debugDescription](nsobject-swift.class/debugdescription%28%29.md)
- [hash](nsobject-swift.class/hash%28%29.md)
- [withL2CAPChannelRef:](nsobject-swift.class/withl2capchannelref_.md): Deprecated.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSObject](nsobjectprotocol.md)
