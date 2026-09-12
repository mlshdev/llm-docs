> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asonetimecodecredential/credentialwithcode:](https://developer.apple.com/documentation/authenticationservices/asonetimecodecredential/credentialwithcode:)

# credentialWithCode:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
+ (instancetype) credentialWithCode:(NSString *) code;
```

## Parameters

- `code`: The one-time code.

<a id="discussion"></a>

## Discussion

Creates and initializes a new ASOneTimeCodeCredential object.
