> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/disablesecureboot()](https://developer.apple.com/documentation/virtualization/vzefivariablestore/disablesecureboot())

# disableSecureBoot() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Disables Secure Boot while preserving the existing configuration.

## Declaration

```swift
func disableSecureBoot() throws
```

<a id="discussion"></a>

## Discussion

**Swift**

```swift
 do {
     try variableStore.disableSecureBoot()
 } catch {
     // Handle error.
 }
```

**Objective-C**

```objc
 NSError *error;
 if (![variableStore disableSecureBootWithError:&error]) {
     // Handle error.
 }
```

# disableSecureBootWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Disables Secure Boot while preserving the existing configuration.

## Declaration

```objectivec
- (BOOL) disableSecureBootWithError:(NSError **) error;
```

## Parameters

- `error`: If not nil, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES` if the framework disabled Secure Boot successfully, `NO` otherwise.

This operation disables Secure Boot in the variable store without modifying the applied configuration, as shown in the following example.

<a id="discussion"></a>

## Discussion

**Swift**

```swift
 do {
     try variableStore.disableSecureBoot()
 } catch {
     // Handle error.
 }
```

**Objective-C**

```objc
 NSError *error;
 if (![variableStore disableSecureBootWithError:&error]) {
     // Handle error.
 }
```
