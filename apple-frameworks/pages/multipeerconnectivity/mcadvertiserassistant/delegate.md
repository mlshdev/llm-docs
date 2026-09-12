> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistant/delegate](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistant/delegate)

# delegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles advertising-assistant-related events.

> Use Network Framework instead

## Declaration

```swift
weak var delegate: (any MCAdvertiserAssistantDelegate)? { get set }
```

## See Also

### Initializing and Configuring

- [init(serviceType:discoveryInfo:session:)](init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary that was passed when this object was initialized.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising.

# delegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles advertising-assistant-related events.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MCAdvertiserAssistantDelegate> delegate;
```

```objectivec
@property (atomic, weak, nullable) id<MCAdvertiserAssistantDelegate> delegate;
```

## See Also

### Initializing and Configuring

- [initWithServiceType:discoveryInfo:session:](init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary that was passed when this object was initialized.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising.
