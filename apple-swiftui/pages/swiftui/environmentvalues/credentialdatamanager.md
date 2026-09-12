> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/credentialdatamanager](https://developer.apple.com/documentation/swiftui/environmentvalues/credentialdatamanager)

# credentialDataManager

**Framework:** AuthenticationServices  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

This environment variable is for SwiftUI clients of the ASCredentialDataManager API. An example usage might look like:

## Declaration

```swift
var credentialDataManager: CredentialDataManager { get }
```

<a id="discussion"></a>

## Discussion

```swift
struct CredentialDataManagerExample: View {
    @Environment(\.credentialDataManager) private var credentialDataManager

    var body: some View {
        Button("Save Credentials") {
            Task {
                do {
                    let credential = getCredential() // defined elsewhere
                    let scope = getScope()
                    try await credentialDataManager.save(credential: credential, for: scope)
                } catch {
                    // code to handle the save error
                }
            }
        }
    }
}
```
