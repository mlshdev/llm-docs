> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/daemon(plistname:)](https://developer.apple.com/documentation/servicemanagement/smappservice/daemon(plistname:))

# daemon(plistName:) (Swift)

**Framework:** Service Management  
**Kind:** Type Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Initializes an app service object with a launch daemon with the property list name you provide.

## Declaration

```swift
class func daemon(plistName: String) -> Self
```

## Parameters

- `plistName`: The name of the property list corresponding to the [SMAppService](../smappservice.md).

<a id="return-value"></a>

## Return Value

An `SMService` object

<a id="discussion"></a>

## Discussion

The property list name must correspond to a property list in the calling app’s `Contents/Library/LaunchDaemons` directory

## See Also

### Managing apps

- [mainApp](mainapp.md): An app service object that corresponds to the main application as a login item.
- [agent(plistName:)](agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [loginItem(identifier:)](loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.

# daemonServiceWithPlistName: (Objective-C)

**Framework:** Service Management  
**Kind:** Type Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Initializes an app service object with a launch daemon with the property list name you provide.

## Declaration

```objectivec
+ (instancetype) daemonServiceWithPlistName:(NSString *) plistName;
```

## Parameters

- `plistName`: The name of the property list corresponding to the [SMAppService](../smappservice.md).

<a id="return-value"></a>

## Return Value

An `SMService` object

<a id="discussion"></a>

## Discussion

The property list name must correspond to a property list in the calling app’s `Contents/Library/LaunchDaemons` directory

## See Also

### Managing apps

- [mainAppService](mainapp.md): An app service object that corresponds to the main application as a login item.
- [agentServiceWithPlistName:](agent%28plistname_%29.md): Initializes an app service object with a launch agent with the property list name you provide.
- [loginItemServiceWithIdentifier:](loginitem%28identifier_%29.md): Initializes an app service object for a login item corresponding to the bundle with the identifier you provide.
