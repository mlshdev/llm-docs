> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/mainapp](https://developer.apple.com/documentation/servicemanagement/smappservice/mainapp)

# mainApp (Swift)

**Framework:** Service Management  
**Kind:** Type Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An app service object that corresponds to the main application as a login item.

## Declaration

```swift
class var mainApp: SMAppService { get }
```

<a id="Discussion"></a>

## Discussion

Use this `SMAppService` to configure the main app to launch at login.

## See Also

### Managing apps

- [agent(plistName:)](agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [daemon(plistName:)](daemon%28plistname_%29.md): Initializes an app service object with a launch daemon with the property list name you provide.
- [loginItem(identifier:)](loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.

# mainAppService (Objective-C)

**Framework:** Service Management  
**Kind:** Type Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An app service object that corresponds to the main application as a login item.

## Declaration

```objectivec
@property (class, readonly) SMAppService * mainAppService;
```

<a id="Discussion"></a>

## Discussion

Use this `SMAppService` to configure the main app to launch at login.

## See Also

### Managing apps

- [agentServiceWithPlistName:](agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [daemonServiceWithPlistName:](daemon%28plistname_%29.md): Initializes an app service object with a launch daemon with the property list name you provide.
- [loginItemServiceWithIdentifier:](loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.
