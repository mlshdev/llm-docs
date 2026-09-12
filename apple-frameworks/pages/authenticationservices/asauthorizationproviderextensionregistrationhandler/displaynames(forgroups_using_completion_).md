> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/displaynames(forgroups:using:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/displaynames(forgroups:using:completion:))

# displayNames(forGroups:using:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

## Declaration

```swift
optional func displayNames(forGroups groups: [String], using loginManager: ASAuthorizationProviderExtensionLoginManager, completion: @escaping @Sendable ([String : String]) -> Void)
```

```swift
optional func displayNames(forGroups groups: [String], using loginManager: ASAuthorizationProviderExtensionLoginManager) async -> [String : String]
```

<a id="discussion"></a>

## Discussion

Request the display names for the supplied group identifiers.  The completion key is the identifier and the value is the display name.

# displayNamesForGroups:loginManager:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

## Declaration

```objectivec
- (void) displayNamesForGroups:(NSArray<NSString *> *) groups loginManager:(ASAuthorizationProviderExtensionLoginManager *) loginManager completion:(void (^)(NSDictionary<NSString *,NSString *> *fullNames)) completion;
```

<a id="discussion"></a>

## Discussion

Request the display names for the supplied group identifiers.  The completion key is the identifier and the value is the display name.
