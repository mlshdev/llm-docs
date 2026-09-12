> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/deliveredverificationcodesmanager](https://developer.apple.com/documentation/swiftui/environmentvalues/deliveredverificationcodesmanager)

# deliveredVerificationCodesManager

**Framework:** AuthenticationServices  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

This environment variable is for SwiftUI clients of the ASDeliveredVerificationCodesManager API. An example usage might look like:

## Declaration

```swift
var deliveredVerificationCodesManager: DeliveredVerificationCodesManager { get }
```

<a id="discussion"></a>

## Discussion

```swift
struct DeliveredVerificationCodesManagerExample: View {
    @Environment(\.deliveredVerificationCodesManager) private var deliveredVerificationCodesManager

    let preferredDuration: TimeInterval

    var body: some View {
        Button("Listen for Codes") {
            Task {
                do {
                    let codes = try deliveredVerificationCodesManager.oneTimeCodes(preferredDuration: preferredDuration)
                    for try await code in codes {
                        handle(code: code)
                    }
                } catch DeliveredVerificationCodesManager.VerificationError.userPermissionDenied {
                    // Explaining why OTCs are needed or try without codes
                } catch DeliveredVerificationCodesManager.VerificationError.appIsNotEnabledCredentialProvider {
                    // Show UI explaining how to turn on the app as a Password Manager
                } catch {
                    // code to handle the save error
                }
            }
        }
    }
}
```
