> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityinformation/init(signers:isencrypted:signingerror:encryptionerror:shouldblockremotecontent:localizedremotecontentblockingreason:)](https://developer.apple.com/documentation/mailkit/memessagesecurityinformation/init(signers:isencrypted:signingerror:encryptionerror:shouldblockremotecontent:localizedremotecontentblockingreason:))

# init(signers:isEncrypted:signingError:encryptionError:shouldBlockRemoteContent:localizedRemoteContentBlockingReason:) (Swift)

**Framework:** MailKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
init(signers: [MEMessageSigner], isEncrypted: Bool, signingError: (any Error)?, encryptionError: (any Error)?, shouldBlockRemoteContent: Bool, localizedRemoteContentBlockingReason: String?)
```

# initWithSigners:isEncrypted:signingError:encryptionError:shouldBlockRemoteContent:localizedRemoteContentBlockingReason: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithSigners:(NSArray<MEMessageSigner *> *) signers isEncrypted:(BOOL) isEncrypted signingError:(NSError *) signingError encryptionError:(NSError *) encryptionError shouldBlockRemoteContent:(BOOL) shouldBlockRemoteContent localizedRemoteContentBlockingReason:(NSString *) localizedRemoteContentBlockingReason;
```
