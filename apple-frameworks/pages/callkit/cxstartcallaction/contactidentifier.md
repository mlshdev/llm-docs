> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction/contactidentifier](https://developer.apple.com/documentation/callkit/cxstartcallaction/contactidentifier)

# contactIdentifier (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The identifier for the call recipient.

## Declaration

```swift
var contactIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The identifier is displayed in the native call UI, and is typically the name of the call recipient.

If a caller corresponds to a [CNContact](../../contacts/cncontact.md) object, set this to the value of the [identifier](../../contacts/cncontact/identifier.md) property of the contact.

## See Also

### Accessing Action Attributes

- [isVideo](isvideo.md): A Boolean value that indicates whether the call is a video call.
- [handle](handle.md): The handle of the call recipient.

# contactIdentifier (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The identifier for the call recipient.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * contactIdentifier;
```

<a id="Discussion"></a>

## Discussion

The identifier is displayed in the native call UI, and is typically the name of the call recipient.

If a caller corresponds to a [CNContact](../../contacts/cncontact.md) object, set this to the value of the [identifier](../../contacts/cncontact/identifier.md) property of the contact.

## See Also

### Accessing Action Attributes

- [video](isvideo.md): A Boolean value that indicates whether the call is a video call.
- [handle](handle.md): The handle of the call recipient.
