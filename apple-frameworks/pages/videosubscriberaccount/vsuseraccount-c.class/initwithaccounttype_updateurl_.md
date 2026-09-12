> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccount-c.class/initwithaccounttype:updateurl:](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccount-c.class/initwithaccounttype:updateurl:)

# initWithAccountType:updateURL:

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Creates a user account object with a URL for account update requests.

## Declaration

```objectivec
- (instancetype) initWithAccountType:(VSUserAccountType) accountType updateURL:(NSURL *) url;
```

## Parameters

- `accountType`: A constant that represents whether a user has access to paid content.
- `url`: A URL that points to the application’s JavaScript endpoint for update requests.

<a id="return-value"></a>

## Return Value

A user account object with a URL for account update requests.

## See Also

### Creating user accounts

- [VSUserAccountType](../vsuseraccounttype.md): Constants that represent whether a user has access to paid content.
