> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontact/actions](https://developer.apple.com/documentation/carplay/cpcontact/actions)

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The actions that the template displays for this contact.

## Declaration

```swift
var actions: [CPButton]? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an array of [CPButton](../cpbutton.md) objects to this property to update the action buttons that the template displays for this contact. The template can display four buttons maximum. If the array contains more buttons, the template uses only the first four.

Contact actions are optional, and the default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Managing Interactions with the Contact

- [CPContactCallButton](../cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](../cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](../cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The actions that the template displays for this contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<__kindof CPButton *> * actions;
```

<a id="Discussion"></a>

## Discussion

Assign an array of [CPButton](../cpbutton.md) objects to this property to update the action buttons that the template displays for this contact. The template can display four buttons maximum. If the array contains more buttons, the template uses only the first four.

Contact actions are optional, and the default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Managing Interactions with the Contact

- [CPContactCallButton](../cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](../cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](../cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.
