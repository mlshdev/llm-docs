> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/setenabled(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Enables or disables the controls in the authorization plug-in’s view.

## Declaration

```swift
func setEnabled(_ inEnabled: Bool)
```

## Parameters

- `inEnabled`: The state the controls should be in.

<a id="Discussion"></a>

## Discussion

When the authorization plug-in calls this method, the subclass should call [setEnabled(\_:)](setenabled%28__%29.md) on the controls that are in its view.

# setEnabled: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Enables or disables the controls in the authorization plug-in’s view.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) inEnabled;
```

## Parameters

- `inEnabled`: The state the controls should be in.

<a id="Discussion"></a>

## Discussion

When the authorization plug-in calls this method, the subclass should call [setEnabled:](setenabled%28__%29.md) on the controls that are in its view.
