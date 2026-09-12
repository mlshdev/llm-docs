> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/edit-a-user](https://developer.apple.com/documentation/devicemanagement/edit-a-user)

# Edit a User

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 1.0+

Modify details about a user.

> This legacy API is currently in maintenance mode. Apple won’t add any new functionality to it.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/editVPPUserSrv
```

## HTTP Body

Content type: `application/json`

Type: `EditVppUserRequest`

missing

## Response Codes

- `200` OK — `EditVppUserResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
  "userId": 100014,
  "email": "test_reg_user15_edited@test.com",
  "sToken": "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2a5Rlopo4KDn3MFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ="
}
```

**Response**

```json
{
  "clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
  "expirationMillis": 1898103480266,
  "location": {
    "locationId": 2000000003431864,
    "locationName": "cloudMDM Location"
  },
  "status": 0,
  "uId": "100978",
  "user": {
    "clientUserIdStr": "200015",
    "email": "test_reg_user15_edited@test.com",
    "inviteCode": "9e8d1ecc57924d9da13b42b4f772a066",
    "inviteUrl": "https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/associateVPPUserWithITSAccount?cc=us&inviteCode=9e8d1ecc57924d9da13b42b4f772a066&mt=8",
    "itsIdHash": "C2Wwd8LcIaE2v6f2/mvu82Gs/Lc="
    "status": "Registered",
    "userId": 100014
  }
}
```

## Topics

### Request and Response

- [EditVppUserRequest](editvppuserrequest.md): The request to edit a user.
- [EditVppUserResponse](editvppuserresponse.md): The response from editing a user.

## See Also

### User management

- [Get a User](get-a-user.md): Deprecated. Get information about a particular user.
- [Get Users](get-users-5boi1.md): Deprecated. Get information about a set of users.
- [Register a User](register-a-user.md): Deprecated. Register a user with the volume-purchase program.
- [Retire a User](retire-a-user.md): Deprecated. Retire a user account.
