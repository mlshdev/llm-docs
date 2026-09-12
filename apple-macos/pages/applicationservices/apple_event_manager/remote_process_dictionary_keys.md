> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/remote_process_dictionary_keys](https://developer.apple.com/documentation/applicationservices/apple_event_manager/remote_process_dictionary_keys)

# Remote Process Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Used to extract information from dictionaries with entries that describe remote processes.

## Topics

### Constants

- [kAERemoteProcessURLKey](https://developer.apple.com/documentation/coreservices/kaeremoteprocessurlkey): Use this key to obtain the full URL to the remote process, as a `CFURLRef`.
- [kAERemoteProcessNameKey](https://developer.apple.com/documentation/coreservices/kaeremoteprocessnamekey): Use this key to obtain the visible name of the remote process, in the localization supplied by the server, as a `CFStringRef`.
- [kAERemoteProcessUserIDKey](https://developer.apple.com/documentation/coreservices/kaeremoteprocessuseridkey): Use this key to obtain the user ID of the remote process, if available; if so, returned as a `CFNumberRef`.
- [kAERemoteProcessProcessIDKey](https://developer.apple.com/documentation/coreservices/kaeremoteprocessprocessidkey): Use this key to obtain the process ID of the remote process, if available; if so, returned as a `CFNumberRef`.
