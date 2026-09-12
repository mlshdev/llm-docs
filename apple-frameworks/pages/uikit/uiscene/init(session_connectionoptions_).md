> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/init(session:connectionoptions:)](https://developer.apple.com/documentation/uikit/uiscene/init(session:connectionoptions:))

# init(session:connectionOptions:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene object using the specified session and connection information.

## Declaration

```swift
init(session: UISceneSession, connectionOptions: UIScene.ConnectionOptions)
```

## Parameters

- `session`: A session object containing the configuration details for the scene. The system creates the session object and passes it to this initialization method.
- `connectionOptions`: An object containing additional options for connecting the scene to your app.

<a id="return-value"></a>

## Return Value

An initialized scene object.

<a id="Discussion"></a>

## Discussion

Subclasses call this method to initialize the scene details.

# initWithSession:connectionOptions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene object using the specified session and connection information.

## Declaration

```objectivec
- (instancetype) initWithSession:(UISceneSession *) session connectionOptions:(UISceneConnectionOptions *) connectionOptions;
```

## Parameters

- `session`: A session object containing the configuration details for the scene. The system creates the session object and passes it to this initialization method.
- `connectionOptions`: An object containing additional options for connecting the scene to your app.

<a id="return-value"></a>

## Return Value

An initialized scene object.

<a id="Discussion"></a>

## Discussion

Subclasses call this method to initialize the scene details.
