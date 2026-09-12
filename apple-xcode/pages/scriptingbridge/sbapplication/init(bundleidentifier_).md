> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/init(bundleidentifier:)](https://developer.apple.com/documentation/scriptingbridge/sbapplication/init(bundleidentifier:))

# init(bundleIdentifier:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.

## Declaration

```swift
init?(bundleIdentifier ident: String)
```

## Parameters

- `ident`: A bundle identifier specifying an application that is OSA-compliant.

<a id="return-value"></a>

## Return Value

An initialized shared instance of an `SBApplication` subclass that represents a target application with the bundle identifier of `ident`. Returns `nil` if no such application can be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

If you must initialize an `SBApplication` object explictly, you should use this initializer if possible; unlike [init(processIdentifier:)](init%28processidentifier_%29.md) and [init(url:)](init%28url_%29-6xbe5.md), this method is not dependent on changeable factors such as the target application’s path or process ID. Even so, you should rarely have to initialize an `SBApplication` object yourself; instead, you should initialize an application-specific subclass such as `iTunesApplication`.

Note that this method does not check whether an application with the given bundle identifier actually exists.

## See Also

### Initializing a Scriptable Application Object

- [init(processIdentifier:)](init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.
- [init(url:)](init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

# initWithBundleIdentifier: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.

## Declaration

```objectivec
- (SBApplication *) initWithBundleIdentifier:(NSString *) ident;
```

## Parameters

- `ident`: A bundle identifier specifying an application that is OSA-compliant.

<a id="return-value"></a>

## Return Value

An initialized shared instance of an `SBApplication` subclass that represents a target application with the bundle identifier of `ident`. Returns `nil` if no such application can be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

If you must initialize an `SBApplication` object explictly, you should use this initializer if possible; unlike [initWithProcessIdentifier:](init%28processidentifier_%29.md) and [initWithURL:](init%28url_%29-6xbe5.md), this method is not dependent on changeable factors such as the target application’s path or process ID. Even so, you should rarely have to initialize an `SBApplication` object yourself; instead, you should initialize an application-specific subclass such as `iTunesApplication`.

Note that this method does not check whether an application with the given bundle identifier actually exists.

## See Also

### Related Documentation

- [applicationWithBundleIdentifier:](applicationwithbundleidentifier_.md): Returns the shared instance representing the target application specified by its bundle identifier.

### Initializing a Scriptable Application Object

- [initWithProcessIdentifier:](init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.
- [initWithURL:](init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.
