> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionuserloginconfiguration/setcustomloginrequestbodyclaims(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionuserloginconfiguration/setcustomloginrequestbodyclaims(_:))

# setCustomLoginRequestBodyClaims(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func setCustomLoginRequestBodyClaims(_ claims: [String : Any]) throws
```

## See Also

### Instance Methods

- [setCustomAssertionRequestBodyClaims(\_:)](setcustomassertionrequestbodyclaims%28__%29.md)
- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md)
- [setCustomLoginRequestHeaderClaims(\_:)](setcustomloginrequestheaderclaims%28__%29.md)

# setCustomLoginRequestBodyClaims:returningError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (BOOL) setCustomLoginRequestBodyClaims:(NSDictionary<NSString *,id> *) claims returningError:(NSError **) error;
```

## See Also

### Instance Methods

- [setCustomAssertionRequestBodyClaims:returningError:](setcustomassertionrequestbodyclaims%28__%29.md)
- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md)
- [setCustomLoginRequestHeaderClaims:returningError:](setcustomloginrequestheaderclaims%28__%29.md)
