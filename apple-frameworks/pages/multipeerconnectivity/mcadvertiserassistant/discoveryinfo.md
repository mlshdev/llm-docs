> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistant/discoveryinfo](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistant/discoveryinfo)

# discoveryInfo (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `info` dictionary that was passed when this object was initialized.

> Use Network Framework instead

## Declaration

```swift
var discoveryInfo: [String : String]? { get }
```

<a id="Discussion"></a>

## Discussion

You set this property’s value when you initialize the object. It cannot be changed later.

## See Also

### Initializing and Configuring

- [init(serviceType:discoveryInfo:session:)](init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-assistant-related events.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising.

# discoveryInfo (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `info` dictionary that was passed when this object was initialized.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSString *> * discoveryInfo;
```

```objectivec
@property (atomic, readonly, nullable) NSDictionary<NSString *,NSString *> * discoveryInfo;
```

<a id="Discussion"></a>

## Discussion

You set this property’s value when you initialize the object. It cannot be changed later.

## See Also

### Initializing and Configuring

- [initWithServiceType:discoveryInfo:session:](init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-assistant-related events.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising.
