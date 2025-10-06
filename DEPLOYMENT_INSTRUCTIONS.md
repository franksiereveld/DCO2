# DCO2 Deployment Instructions

## SSH Key Authentication Setup

### Generated SSH Key Pair
- **Private Key**: `dco2_deploy_key` (stored locally, not in repository for security)
- **Public Key**: `dco2_deploy_key.pub` (in this directory)
- **Key Type**: ED25519
- **Comment**: deployment@dco2

### Public Key for GitHub Deploy Key
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINAupabyGqeFpOVQ5cWZxNyNxi42XxaskB62RNz278Ht deployment@dco2
```

### GitHub Repository Setup Required
1. Go to: https://github.com/franksiereveld/DCO2/settings/keys
2. Click "Add deploy key"
3. Title: "Deployment Key for NatureNeutral.AI Update"
4. Paste the public key above
5. **Important**: Check "Allow write access"
6. Click "Add key"

### Current Status
- ✅ Local changes applied: "The Green AI Factory" → "NatureNeutral.AI"
- ✅ SSH key pair generated and saved
- ⏳ Waiting for deploy key to be added to GitHub repository
- ⏳ Ready to push changes once authentication is configured

### Next Steps After Deploy Key is Added
1. Configure SSH to use the private key
2. Add and commit the changes
3. Push to GitHub repository
4. Verify deployment via GitHub Actions
5. Confirm changes are live on eco2.ai

### Files Modified
- `src/App.jsx` (line 199): Changed text from "The Green AI Factory" to "NatureNeutral.AI"

### Repository Information
- **GitHub Repository**: https://github.com/franksiereveld/DCO2
- **Live Website**: https://eco2.ai
- **Current Branch**: manus-update
