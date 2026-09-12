> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/recipients](https://developer.apple.com/documentation/appkit/nssharingservice/recipients)

# recipients (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array containing the user handles of the desired recipients.

## Declaration

```swift
var recipients: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each object in the array is an `NSString` object that contains the handle of a single recipient. The specific format of these handle varies from service to service. For example, some services use email addresses as handles.

## See Also

### Configuring the Service

- [menuItemTitle](menuitemtitle.md): The title of the service in the Share menu.
- [subject](subject.md): The subject of the post.

# recipients (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array containing the user handles of the desired recipients.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * recipients;
```

<a id="Discussion"></a>

## Discussion

Each object in the array is an `NSString` object that contains the handle of a single recipient. The specific format of these handle varies from service to service. For example, some services use email addresses as handles.

## See Also

### Configuring the Service

- [menuItemTitle](menuitemtitle.md): The title of the service in the Share menu.
- [subject](subject.md): The subject of the post.
