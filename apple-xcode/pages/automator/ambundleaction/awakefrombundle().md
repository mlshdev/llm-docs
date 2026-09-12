> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/ambundleaction/awakefrombundle()](https://developer.apple.com/documentation/automator/ambundleaction/awakefrombundle())

# awakeFromBundle() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action object to perform setup tasks requiring the presence of all bundle objects.

## Declaration

```swift
func awakeFromBundle()
```

<a id="Discussion"></a>

## Discussion

The system sends this message to the action object when all objects in its bundle have been unarchived. Use this method to perform setup tasks such as adding the action object as an observer of notifications, dynamically establishing bindings, and dynamically setting targets and actions.

# awakeFromBundle (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action object to perform setup tasks requiring the presence of all bundle objects.

## Declaration

```objectivec
- (void) awakeFromBundle;
```

<a id="Discussion"></a>

## Discussion

The system sends this message to the action object when all objects in its bundle have been unarchived. Use this method to perform setup tasks such as adding the action object as an observer of notifications, dynamically establishing bindings, and dynamically setting targets and actions.
