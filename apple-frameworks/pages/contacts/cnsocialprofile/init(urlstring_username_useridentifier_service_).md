> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsocialprofile/init(urlstring:username:useridentifier:service:)](https://developer.apple.com/documentation/contacts/cnsocialprofile/init(urlstring:username:useridentifier:service:))

# init(urlString:username:userIdentifier:service:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new social profile object with the specified URL.

## Declaration

```swift
init(urlString: String?, username: String?, userIdentifier: String?, service: String?)
```

## Parameters

- `urlString`: The URL for the social profile.
- `username`: The user name for the social profile.
- `userIdentifier`: The service’s user identifier for the social profile.
- `service`: The service name of the social profile.

<a id="Return-Value"></a>

## Return Value

An initialized social profile.

# initWithUrlString:username:userIdentifier:service: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new social profile object with the specified URL.

## Declaration

```objectivec
- (instancetype) initWithUrlString:(NSString *) urlString username:(NSString *) username userIdentifier:(NSString *) userIdentifier service:(NSString *) service;
```

## Parameters

- `urlString`: The URL for the social profile.
- `username`: The user name for the social profile.
- `userIdentifier`: The service’s user identifier for the social profile.
- `service`: The service name of the social profile.

<a id="Return-Value"></a>

## Return Value

An initialized social profile.
