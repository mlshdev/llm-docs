> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/init(compactjws:)](https://developer.apple.com/documentation/adattributionkit/appimpression/init(compactjws:))

# init(compactJWS:)

**Framework:** AdAttributionKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Creates a new app impression with the provided compact JSON Web Signature (JWS).

## Declaration

```swift
init(compactJWS: String) async throws
```

## Parameters

- `compactJWS`: A string that represents a JWS.

<a id="discussion"></a>

## Discussion

Create a new `AppImpression` by providing a compact string representation of the JWS as the following example shows:

```swift
    do {
        let impression = try await AppImpression(compactJWS: compactJWS)
        print("Impression advertised item ID: \(impression.advertisedItemID)")
    }
    catch {
        print("Failed to decode impression: \(error)")
    }
```
