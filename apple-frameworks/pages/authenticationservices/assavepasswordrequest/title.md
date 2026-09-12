> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assavepasswordrequest/title](https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/title)

# title (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A user-displayable name for the password credential to be saved.

## Declaration

```swift
var title: String? { get }
```

<a id="discussion"></a>

## Discussion

This is independent of the service identifier and should be used for identifying the individual credential.

# title (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A user-displayable name for the password credential to be saved.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * title;
```

<a id="discussion"></a>

## Discussion

This is independent of the service identifier and should be used for identifying the individual credential.
