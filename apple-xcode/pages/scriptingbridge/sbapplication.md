> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication](https://developer.apple.com/documentation/scriptingbridge/sbapplication)

# SBApplication (Swift)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The `SBApplication` class provides a mechanism enabling an Objective-C program to send Apple events to a scriptable application and receive Apple events in response. It thereby makes it possible for that program to control the application and exchange data with it. Scripting Bridge works by bridging data types between Apple event descriptors and Cocoa objects.

## Declaration

```swift
class SBApplication
```

<a id="overview"></a>

## Overview

Although `SBApplication` includes methods that manually send and process Apple events, you should never have to call these methods directly. Instead, subclasses of `SBApplication` implement application-specific methods that handle the sending of Apple events automatically.

For example, if you wanted to get the current iTunes track, you can simply use the `currentTrack` method of the dynamically defined subclass for the iTunes application—which handles the details of sending the Apple event for you—rather than figuring out the more complicated, low-level alternative:

```objc
[iTunes propertyWithCode:'pTrk'];
```

If you do need to send Apple events manually, consider using the `NSAppleEventDescriptor` class.

<a id="Subclassing-Notes"></a>

## Subclassing Notes

You rarely instantiate `SBApplication` objects directly. Instead, you get the shared instance of a application-specific subclass typically by calling one of the `applicationWith...` class methods, using a bundle identifier, process identifier, or URL to identify the application.

## Topics

### Initializing a Scriptable Application Object

- [init(bundleIdentifier:)](sbapplication/init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [init(processIdentifier:)](sbapplication/init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.
- [init(url:)](sbapplication/init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

### Creating a Scripting Class

- [class(forScriptingClass:)](sbapplication/class%28forscriptingclass_%29.md): Returns a class object that represents a particular class in the target application.

### Controlling the Application

- [activate()](sbapplication/activate%28%29.md): Moves the target application to the foreground immediately.
- [isRunning](sbapplication/isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](sbapplication/launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sbapplication/sendmode.md): The mode for sending Apple events to the target application.
- [timeout](sbapplication/timeout.md): The period the application will wait to receive reply Apple events.

### Managing the Delegate

- [delegate](sbapplication/delegate.md): The error-handling delegate of the receiver.

### Initializers

- [init(URL:)](sbapplication/init%28url_%29-2kr06.md)
- [init(URL:)](sbapplication/init%28url_%29-4bno1.md)

## Relationships

### Inherits From

- [SBObject](sbobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# SBApplication (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The `SBApplication` class provides a mechanism enabling an Objective-C program to send Apple events to a scriptable application and receive Apple events in response. It thereby makes it possible for that program to control the application and exchange data with it. Scripting Bridge works by bridging data types between Apple event descriptors and Cocoa objects.

## Declaration

```objectivec
@interface SBApplication : SBObject
```

<a id="overview"></a>

## Overview

Although `SBApplication` includes methods that manually send and process Apple events, you should never have to call these methods directly. Instead, subclasses of `SBApplication` implement application-specific methods that handle the sending of Apple events automatically.

For example, if you wanted to get the current iTunes track, you can simply use the `currentTrack` method of the dynamically defined subclass for the iTunes application—which handles the details of sending the Apple event for you—rather than figuring out the more complicated, low-level alternative:

```objc
[iTunes propertyWithCode:'pTrk'];
```

If you do need to send Apple events manually, consider using the `NSAppleEventDescriptor` class.

<a id="Subclassing-Notes"></a>

## Subclassing Notes

You rarely instantiate `SBApplication` objects directly. Instead, you get the shared instance of a application-specific subclass typically by calling one of the `applicationWith...` class methods, using a bundle identifier, process identifier, or URL to identify the application.

## Topics

### Getting a Scriptable Application Instance

- [applicationWithBundleIdentifier:](sbapplication/applicationwithbundleidentifier_.md): Returns the shared instance representing the target application specified by its bundle identifier.
- [applicationWithProcessIdentifier:](sbapplication/applicationwithprocessidentifier_.md): Returns the shared instance representing a target application specified by its process identifier.
- [applicationWithURL:](sbapplication/applicationwithurl_.md): Returns the shared instance representing a target application specified by the given URL.

### Initializing a Scriptable Application Object

- [initWithBundleIdentifier:](sbapplication/init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [initWithProcessIdentifier:](sbapplication/init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.
- [initWithURL:](sbapplication/init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

### Creating a Scripting Class

- [classForScriptingClass:](sbapplication/class%28forscriptingclass_%29.md): Returns a class object that represents a particular class in the target application.

### Controlling the Application

- [activate](sbapplication/activate%28%29.md): Moves the target application to the foreground immediately.
- [running](sbapplication/isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](sbapplication/launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sbapplication/sendmode.md): The mode for sending Apple events to the target application.
- [timeout](sbapplication/timeout.md): The period the application will wait to receive reply Apple events.

### Managing the Delegate

- [delegate](sbapplication/delegate.md): The error-handling delegate of the receiver.

## Relationships

### Inherits From

- [SBObject](sbobject.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
