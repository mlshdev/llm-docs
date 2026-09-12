> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccounttype](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccounttype)

# VSUserAccountType

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Constants that represent whether a user has access to paid content.

## Declaration

```objectivec
enum VSUserAccountType : NSInteger;
```

## Topics

### Account types

- [VSUserAccountTypeFree](vsuseraccounttype/vsuseraccounttypefree.md): A constant that indicates a user has access to free content.
- [VSUserAccountTypePaid](vsuseraccounttype/vsuseraccounttypepaid.md): A constant that indicates a user has access to paid content.

## See Also

### Creating user accounts

- [initWithAccountType:updateURL:](vsuseraccount-c.class/initwithaccounttype_updateurl_.md): Creates a user account object with a URL for account update requests.
