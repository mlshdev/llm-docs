> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asonetimecodecredentialidentity/init(serviceidentifier:label:recordidentifier:)](https://developer.apple.com/documentation/authenticationservices/asonetimecodecredentialidentity/init(serviceidentifier:label:recordidentifier:))

# init(serviceIdentifier:label:recordIdentifier:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
init(serviceIdentifier: ASCredentialServiceIdentifier, label: String, recordIdentifier: String?)
```

## Parameters

- `serviceIdentifier`: The service identifier for which this credential identity is valid.
- `label`: A user-provided label to identify the one-time code.
- `recordIdentifier`: An optional string to uniquely identify this record in your local database.

<a id="discussion"></a>

## Discussion

Initializes an instance of ASOneTimeCodeCredentialIdentity.

# initWithServiceIdentifier:label:recordIdentifier: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
- (instancetype) initWithServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier label:(NSString *) label recordIdentifier:(NSString *) recordIdentifier;
```

## Parameters

- `serviceIdentifier`: The service identifier for which this credential identity is valid.
- `label`: A user-provided label to identify the one-time code.
- `recordIdentifier`: An optional string to uniquely identify this record in your local database.

<a id="discussion"></a>

## Discussion

Initializes an instance of ASOneTimeCodeCredentialIdentity.
